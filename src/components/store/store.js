import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const add = createAction("deck/add");
export const setCurrentDeck = createAction("deck/setCurrentDeck");

const initialState = {
  decks: [],
  currentDeck: {
    title: "Starter deck",
    flashcards: [{ question: "Question...", answer: "Answer..." }],
  },
};

const deckReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(add, (state, action) => {
      state.currentDeck.flashcards = [
        action.payload,
        ...state.currentDeck.flashcards,
      ];
    })
    .addCase(setCurrentDeck, (state, action) => {
      state.currentDeck = action.payload;
    });
});

const store = configureStore({
  reducer: deckReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
