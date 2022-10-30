import { db } from "./../../data/Database";
import { collection, addDoc } from "firebase/firestore";
import { call, put, all, takeLatest } from "redux-saga/effects";

function updateDeck(deck) {
  addDoc(collection(db, "decksForUserId"), deck);
}

function* requestDeckUpdate(action) {
  try {
    yield call(updateDeck, action.payload);
    yield put({ type: "SET__UNSAVED__CHANGES", payload: false });
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
