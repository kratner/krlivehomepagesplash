import {
  GET_SPLASH_LINKS_BEGIN,
  GET_SPLASH_LINKS_SUCCESS,
  GET_SPLASH_LINKS_FAILURE
} from "../actions/SplashLinksActions";

const initialState = {
  listItems: [],
  loading: false,
  hasListItems: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SPLASH_LINKS_BEGIN:
      return {
        ...state,
        loading: true,
        hasListItems: false
      };
    case GET_SPLASH_LINKS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasListItems: true,
        listItems: action.payload.data.listItems
      };
    case GET_SPLASH_LINKS_FAILURE:
      break;
    default:
      return state;
  }
};
