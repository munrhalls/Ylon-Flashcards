import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const add = createAction("deck/add");

const initialState = {
  deck: [{ question: "Question...", answer: "Answer..." }],
};

const deckReducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    state.deck = [action.payload, ...state.deck];
  });
});

const store = configureStore({
  reducer: deckReducer,
  middleware: sagaMiddleware,
});

sagaMiddleware.run(rootSaga);

export { store };
