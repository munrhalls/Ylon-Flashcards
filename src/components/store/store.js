import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  decks: [],
  currentDeck: {
    title: "Starter deck",
    flashcards: [{ question: "Question...", answer: "Answer..." }],
  },
  flipped: false,
  unsavedChanges: true,
};
export const flip = createAction("FLIP");

export const addFlashcard = createAction("ADD__FLASHCARD");
export const setCurrentDeck = createAction("SET__CURRENT__DECK");
export const setUnsavedChanges = createAction("SET__UNSAVED__CHANGES");

const deckReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addFlashcard, (state, action) => {
      state.currentDeck.flashcards = [
        action.payload,
        ...state.currentDeck.flashcards,
      ];
    })
    .addCase(setCurrentDeck, (state, action) => {
      state.currentDeck = action.payload;
    })
    .addCase(setUnsavedChanges, (state, action) => {
      state.unsavedChanges = action.payload;
    })
    .addCase(flip, (state, action) => {
      state.flipped = !action.payload;
    });
});

const store = configureStore({
  reducer: deckReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
