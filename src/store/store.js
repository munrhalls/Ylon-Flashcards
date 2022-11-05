import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const currentDeck = {
  title: "Starter deck",
  flashcards: [{ question: "Question...", answer: "Answer..." }],
};

export const setCurrentDeck = createAction("SET__CURRENT__DECK");
export const addFlashcard = createAction("ADD__FLASHCARD");
export const setFlashcard = createAction("SET__FLASHCARD");
export const setFlashcardDraft = createAction("SET__FLASHCARD__DRAFT");
export const setUnsavedChanges = createAction("SET__UNSAVED__CHANGES");
export const flip = createAction("FLIP");

const currentDeckReducer = createReducer(currentDeck, (builder) => {
  builder
    .addCase(setCurrentDeck, (state, action) => {
      state = action.payload;
    })
    .addCase(addFlashcard, (state, action) => {
      state.flashcards = [{ ...action.payload }, ...state.flashcards];
      state.unsavedChanges = true;
    })
    .addCase(setFlashcard, (state, action) => {
      state.flashcards[0] = action.payload;
      state.unsavedChanges = true;
    });
});

const app = {
  decks: [],
  flashcardDraft: {
    question: "",
    answer: "",
  },
  flipped: false,
  unsavedChanges: false,
};

const appReducer = createReducer(app, (builder) => {
  builder
    .addCase(setFlashcardDraft, (state, action) => {
      state.flashcardDraft = action.payload;
    })
    .addCase(setUnsavedChanges, (state, action) => {
      state.unsavedChanges = action.payload;
    })
    .addCase(flip, (state, action) => {
      console.log("flip");
      state.flipped = !action.payload;
    });
});

const rootReducer = combineReducers({
  currentDeck: currentDeckReducer,
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { store };
