import { db } from "./../../data/Database";
import { collection, addDoc } from "firebase/firestore";
import {
  call,
  put,
  takeEvery,
  all,
  select,
  takeLatest,
} from "redux-saga/effects";
import { v4 as uuid } from "uuid";

function* requestDeckUpdate(action) {
  try {
    yield call(addDoc(collection(db, "decksForUserId"), action.payload));
    yield put({ type: "DECK__UPDATE__SUCCEEDED", payload: true });
  } catch (e) {
    yield put({ type: "DECK__UPDATE__FAILED", message: e.message });
  }
}

function* watchRequestDeckUpdate() {
  yield takeLatest("DECK__UPDATE__REQUESTED", requestDeckUpdate);
}

export default function* rootSaga() {
  yield all([requestDeckUpdate(), watchRequestDeckUpdate()]);
}
