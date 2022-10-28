import { db } from "./Database";
import { doc, setDoc } from "firebase/firestore";
import { call, put, takeEvery } from "redux-saga/effects";
import { v4 as uuid } from "uuid";

function* requestDeckUpdate() {
  try {
    const user = yield call(
      setDoc(doc(db, "decksForUserId"), action.payload.deck.id)
    );
    yield put({ type: "DECK__UPDATE__SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "DECK__UPDATE__FAILED", message: e.message });
  }
}

function* watchRequestDeckUpdate() {
  yield takeEvery("REQUEST__DECK__UPDATE", requestDeckUpdate);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchRequestDeckUpdate()]);
}
