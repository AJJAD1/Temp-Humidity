import { API } from 'aws-amplify'

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
// Note that the "context" is used to pass data through the API state changes
// in order to use it at a later stage to react to the API response
export default (store: any) => (next: any) => (action: any) => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { apiName, path, method, types, myInit, context } = callAPI

  if (typeof apiName !== 'string') {
    throw new Error('Specify a string API name.')
  }
  if (typeof path !== 'string') {
    throw new Error('Specify a string path.')
  }
  if (typeof method !== 'string') {
    throw new Error('Specify a method.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every((type) => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = (data: any) => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType, context: context }))

  apiCall(method, path, myInit).then(
    (response: any) =>
      next(
        actionWith({
          response,
          type: successType,
          context: context,
        }),
      ),
    (error: any) =>
      next(
        actionWith({
          type: failureType,
          error: 'Something bad happened in API call',
        }),
      ),
  )
}

// Default API call method (should be used everywhere)
export function apiCall(
  method: string,
  path: string,
  myInit: any,
) {
  const apiName = ''
  switch (method) {
    case 'get':
      return API.get(apiName, path, myInit)
    case 'post':
      return API.post(apiName, path, myInit)
    case 'put':
      return API.put(apiName, path, myInit)
    case 'delete':
      return API.del(apiName, path, myInit)
    default:
      throw new Error('API method needs to be either get, put, post or delete.')
  }
}
