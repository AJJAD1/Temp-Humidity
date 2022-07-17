import { apiCall } from '../../common/api'

export const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS'

export const getPlanesName = () => {
  let path =  "";
  let myInit = {
    headers: {},
    response: true,
  }
  return apiCall('get', path, myInit)
}

export const getPlanesAndName = () => (dispatch: any, getState: any) => {
  return (
    getPlanesName().then((response) => {
      console.log('action successful', response)
      dispatch({ response, type: GET_ACTION_SUCCESS });
    })
  )
};
