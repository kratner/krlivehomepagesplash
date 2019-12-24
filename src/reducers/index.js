import { combineReducers } from "redux";
import menuReducer from "./menuReducer";

const initialState = {
  count: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    /*
      case GET_MEDIA_DEVICES_BEGIN:
        return {
          ...state,
          loading: true
        };
      case GET_MEDIA_DEVICES_SUCCESS:
        return {
          ...state,
          loading: false,
          devices: action.payload.devices
        };
      case GET_MEDIA_DEVICES_FAILURE:
        break;
        */
    default:
      return state;
  }
};
const reducer = combineReducers({
  rootReducer: rootReducer,
  menuReducer: menuReducer
});
export default reducer;
