import { combineReducers } from "redux";
import splashLinksReducer from "./splashLinksReducer";
import socialLinksReducer from "./socialLinksReducer";

const reducer = combineReducers({
  splashLinks: splashLinksReducer,
  socialLinks: socialLinksReducer
});
export default reducer;
