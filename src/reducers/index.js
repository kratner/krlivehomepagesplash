import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import socialLinksReducer from "./socialLinksReducer";

const reducer = combineReducers({
  splashLinks: menuReducer,
  socialLinks: socialLinksReducer
});
export default reducer;
