import { combineReducers } from "redux";
//import splashLinksReducer from "./splashLinksReducer";
//import socialLinksReducer from "./socialLinksReducer";
import linksReducer from "./linksReducer";

const reducer = combineReducers({
  //splashLinks: splashLinksReducer,
  //socialLinks: socialLinksReducer,
  links: linksReducer
});
export default reducer;
