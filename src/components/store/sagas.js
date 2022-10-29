import { db } from "./../../data/Database";
import { doc, setDoc } from "firebase/firestore";
import { call, put, takeEvery, all, select } from "redux-saga/effects";
import { v4 as uuid } from "uuid";

function* requestDeckUpdate() {
  try {
   const currentDeck = yield select(deck)
    const deck = yield setDoc(doc(db, "decksForUserId", "deckId"), {});
    yield put({ type: "DECK__UPDATE__SUCCEEDED", deck: deck });
  } catch (e) {
    yield put({ type: "DECK__UPDATE__FAILED", message: e.message });
  }
}

function* watchRequestDeckUpdate() {
  yield takeEvery("DECK__UPDATE__REQUESTED", requestDeckUpdate);
}

export default function* rootSaga() {
  yield all([requestDeckUpdate(), watchRequestDeckUpdate()]);
}
