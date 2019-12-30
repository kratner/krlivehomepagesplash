import {
  GET_SOCIAL_LINKS_BEGIN,
  GET_SOCIAL_LINKS_SUCCESS,
  GET_SOCIAL_LINKS_FAILURE
} from "../actions/SocialLinksActions";

const initialState = {
  listItems: [],
  loading: false,
  hasListItems: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SOCIAL_LINKS_BEGIN:
      return {
        ...state,
        loading: true,
        hasListItems: false
      };
    case GET_SOCIAL_LINKS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasListItems: true,
        listItems: action.payload.data.listItems
      };
    case GET_SOCIAL_LINKS_FAILURE:
      break;
    default:
      return state;
  }
};
