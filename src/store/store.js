import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const currentDeck = {
  title: "Starter deck",
  flashcards: [
    { question: "Question1...", answer: "Answer1..." },
    { question: "Question2...", answer: "Answer2..." },
    { question: "Question3...", answer: "Answer.3.." },
    { question: "Question.4..", answer: "Answer..4." },
    { question: "Question..5.", answer: "Answer...5" },
    { question: "Question...6", answer: "Answer..6." },
  ],
};

export const shuffleDeck = createAction("SHUFFLE__DECK");
export const setCurrentDeck = createAction("SET__CURRENT__DECK");
export const addFlashcard = createAction("ADD__FLASHCARD");
export const setFlashcard = createAction("SET__FLASHCARD");
export const deleteFlashcard = createAction("DELETE__FLASHCARD");
export const setFlashcardDraft = createAction("SET__FLASHCARD__DRAFT");
export const setUnsavedChanges = createAction("SET__UNSAVED__CHANGES");
export const flip = createAction("FLIP");

const currentDeckReducer = createReducer(currentDeck, (builder) => {
  builder
    .addCase(shuffleDeck, (state, action) => {
      state.flashcards = action.payload;
    })
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
    })
    .addCase(deleteFlashcard, (state, action) => {
      console.log(state.flashcards);
      state.flashcards.splice(action.payload, 1);

      state.unsavedChanges = true;
    });
});

const app = {
  decks: [
    {
      title: "Starter deck 1",
      flashcards: [{ question: "Question...", answer: "Answer..." }],
    },
    {
      title: "Starter deck 2",
      flashcards: [{ question: "Question...", answer: "Answer..." }],
    },
    {
      title: "Starter deck 3",
      flashcards: [{ question: "Question...", answer: "Answer..." }],
    },
    {
      title: "Starter deck 4",
      flashcards: [{ question: "Question...", answer: "Answer..." }],
    },
  ],
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
      console.log(action.payload);
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
