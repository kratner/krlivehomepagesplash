import {
  GET_LINKS_BEGIN,
  GET_LINKS_SUCCESS,
  GET_LINKS_FAILURE
} from "../actions/LinksActions";

const initialState = {
  splashListItems: [],
  socialListItems: [],
  loading: false,
  hasListItems: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LINKS_BEGIN:
      return {
        ...state,
        loading: true,
        hasListItems: false
      };
    case GET_LINKS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasListItems: true,
        splashListItems: action.payload.data.splashListItems,
        socialListItems: action.payload.data.socialListItems
      };
    case GET_LINKS_FAILURE:
      break;
    default:
      return state;
  }
};
