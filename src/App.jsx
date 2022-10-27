import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import UseFormControl from "./components/FlashcardEdit/FlashcardEdit";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function App() {
  const stateReducer = (
    state = {
      decks: [[{ id: 1, question: "Question...", answer: "Answer..." }]],
      flip: false,
    },
    { type, payload }
  ) => {
    let currentDeck = state.decks[0];

    switch (type) {
      case "ADD__FLASHCARD":
        currentDeck = [payload, ...currentDeck];
        return {
          ...state,
          decks: [currentDeck, ...state.decks],
        };
      case "FLIP__FLASHCARD":
        return {
          ...state,
          flip: !payload,
        };
      case "EDIT__FLASHCARD":
        currentDeck = [payload, ...currentDeck];
        return {
          ...state,
          decks: [currentDeck, ...state.decks],
        };
      default:
        return state;
    }
  };

  const store = createStore(stateReducer);

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
