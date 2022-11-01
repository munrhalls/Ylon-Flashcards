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
  flashcardDraft: {},
  flipped: false,
  unsavedChanges: false,
};
export const setCurrentDeck = createAction("SET__CURRENT__DECK");
export const setFlashcardDraft = createAction("SET__FLASHCARD__DRAFT");
export const setUnsavedChanges = createAction("SET__UNSAVED__CHANGES");
export const addFlashcard = createAction("ADD__FLASHCARD");
export const editFlashcard = createAction("EDIT__FLASHCARD");
export const flip = createAction("FLIP");

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentDeck, (state, action) => {
      state.currentDeck = action.payload;
    })
    .addCase(setFlashcardDraft, (state, action) => {
      if (action.payload === "add")
        state.flashcardDraft = { question: "Question...", answer: "Answer..." };
      if (action.payload === "edit") {
        state.flashcardDraft = state.currentDeck.flashcards[0];
      }
    })
    .addCase(setUnsavedChanges, (state, action) => {
      state.unsavedChanges = action.payload;
    })
    .addCase(addFlashcard, (state, action) => {
      state.currentDeck.flashcards = [
        { ...action.payload },
        ...state.currentDeck.flashcards,
      ];
      state.unsavedChanges = true;
    })
    .addCase(editFlashcard, (state, action) => {
      state.currentDeck.flashcards[0] = action.payload;
      state.unsavedChanges = true;
    })
    .addCase(flip, (state, action) => {
      console.log("flip");
      state.flipped = !action.payload;
    });
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
