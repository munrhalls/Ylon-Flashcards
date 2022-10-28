import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import { AppBar, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import UseFormControl from "./components/FlashcardManage/FlashcardManage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

export const add = createAction("flashcard/add");

const initialState = {
  flashcards: [{ question: "Question...", answer: "Answer..." }],
};

const flashcardsReducer = createReducer(initialState, (builder) => {
  builder.addCase(add, (state, action) => {
    state.flashcards = [action.payload, state.flashcards];
  });
});

const store = configureStore({ reducer: flashcardsReducer });

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Flashcard />} />
          <Route path="/flashcard/add" element={<UseFormControl />} />
          <Route path="/flashcard/edit" element={<UseFormControl />} />
          <Route path="/flashcard/delete" element={<Flashcard />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
