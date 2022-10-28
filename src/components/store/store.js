import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const add = createAction("flashcard/add");

const initialState = {
  flashcards: [{ question: "Question...", answer: "Answer..." }],
};

const deckReducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    state.flashcards = [action.payload, ...state.flashcards];
  });
});

export const store = configureStore({ reducer: deckReducer });
