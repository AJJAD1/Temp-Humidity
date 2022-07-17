import {
  GET_ACTION_SUCCESS,
} from "./moviesAction";

export interface MovieItem {
  movieName: string;
  planeForMovieProjection: string;
}

export interface MovieItemList {
  movieItemList: MovieItem[];
}

interface State {
  movieItemList: MovieItem[];
  clickevent: boolean;
}

const initialStateAction: State = {
  movieItemList: [],
  clickevent: false,
};

export const movieItem = (state: State = initialStateAction, action: any) => {
  switch (action.type) {
    case GET_ACTION_SUCCESS:
      console.log(action,"objectState");
      return Object.assign({}, action, {
        movieName:"MV1",
        planeForMovieProjection:"P1"
      });
    default:
      return state;
  }
};


