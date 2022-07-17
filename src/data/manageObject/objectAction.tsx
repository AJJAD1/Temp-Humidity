import { apiCall } from '../../common/api'

export const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS'
export const GET_OBJECT_NAME = 'GET_OBJECT_NAME'

export const getObjectName = () => {
  let path = "/";
  let myInit = {
    headers: {},
    response: true,
  }
  return apiCall('get', path, myInit)
}

export const getObjectAndName = () => (dispatch: any, getState: any) => {
  return (
    // getObjectName().then((response) => {
    //   console.log('action successful', response)
    //   dispatch({ response, type: GET_ACTION_SUCCESS });
// useEffect(() => {
//   fetch('http://localhost:3000/get')
//     .then((res) => res.json())
//     .then((result) => {
//       setPosts(result);
//     });
// }, []);

//Using Mockoon to mock the api calls from local host.

    fetch('https://api.thingspeak.com/channels/1764275/feeds.json?api_key=OB9O8O3Z9OJPJ008&results=2')
    .then((res) => res.json())
    .then((result) => {
      dispatch({ result, type: GET_ACTION_SUCCESS });
    })
  )
};


// export const getObjectDataForList = () => {
//   let path = "/";
//   let myInit = {
//     headers: {},
//     response: true,
//   }
//   return apiCall('get', path, myInit)
// }

export const getObjectDataForList = (objectData:any) => (dispatch: any, getState: any) => {
  dispatch({ objectData, type: GET_OBJECT_NAME });
};

//Sample Data 1
// [
//   {
//     "objectName":"Object 1",
//     "planeForObjectName":"Plane 1",
//     "movieName":"Movie 1"
//   }, 
//   {
//     "objectName":"Object 2", 
//     "planeForObjectName":"Plane 2",
//     "movieName":"Movie 2"
//   },
//   {
//     "objectName":"Object 3",
//     "planeForObjectName":"Plane 5",
//     "movieName":"Movie 3"
//   }
//   ]

//Sample Data 2
// [
//   {
//     "objectName":"Object 1",
//     "planeForObjectName":["Plane 1","Plane3"],
//     "movieName":"Movie 1"
//   }, 
//   {
//     "objectName":"Object 2", 
//     "planeForObjectName":["Plane 2","Plane4"],
//     "movieName":"Movie 2"
//   },
//   {
//     "objectName":"Object 3",
//     "planeForObjectName":["Plane 5","Plane 6"],
//     "movieName":"Movie 3"
//   }
//   ]