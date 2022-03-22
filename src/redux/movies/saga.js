import { call, put, takeLatest } from "redux-saga/effects";
import { getMoviesFnc } from "../../helpers/apiHelpers";
import * as actionTypes from "../movies/actionTypes";
import { setMovies } from "./actions";

function* onGetMovies(action) {
  try {
    const response = yield call(getMoviesFnc, action.payload);
    yield put(setMovies(response));
  } catch {
    // yield put(actions.setLoading(false));
  }
}

export default function* MoviesSaga() {
  yield takeLatest(actionTypes.GET_MOVIES_LIST, onGetMovies);
}
