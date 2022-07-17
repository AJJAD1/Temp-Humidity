import {
  GET_ACTION_SUCCESS,
  GET_OBJECT_NAME
} from "./objectAction";

export interface ObjectItem {
  id: any;
  objectName: string;
  planeForObjectName: string;
}

export interface ObjectItemList {
  objectItemList: ObjectItem[];
}

interface State {
  objectItemList: ObjectItem[];
  ObjectNameForList:any;
}

const initialStateAction: State = {
  objectItemList: [],
  ObjectNameForList:{},
};

export const objectItem = (state: State = initialStateAction, action: any) => {
  switch (action.type) {
    case GET_ACTION_SUCCESS:
      console.log(action.result,"Line 25 object Data")
      return Object.assign({}, state, {
        objectItemList:action.result.feeds[0],
      });
    case  GET_OBJECT_NAME:
      return Object.assign({}, state, {ObjectNameForList: action.objectData}); 
    default:
      return state;
  }
};
