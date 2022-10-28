import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const add = createAction("deck/add");

const initialState = {
  deck: [{ question: "Question...", answer: "Answer..." }],
};

const deckReducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    state.deck = [action.payload, ...state.deck];
  });
});

const store = configureStore({ reducer: deckReducer });
export { store };
