import { combineReducers } from "redux";
import MovieReducer from "./movies/reducer";

const rootReducer = combineReducers({
  MovieReducer,
});

export default rootReducer;
