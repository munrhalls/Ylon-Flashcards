import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import UseFormControl from "./components/FlashcardEdit/FlashcardEdit";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { Routes, Route, Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((themes) => {
  return {
    container: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "15% 50% 85%",
      gridTemplateRows: "15% 65% 85%",
      [themes.breakpoints.down("md")]: {
        gridTemplateColumns: "15% 70% 85%",
        gridTemplateRows: "15% 70% 85%",
      },
    },
  };
});

export default function App() {
  const classes = useStyles();

  const stateReducer = (
    state = {
      decks: [],
      currentDeck: [],
    },
    { type, payload }
  ) => {
    switch (type) {
      case "ADD__FLASHCARD":
        return {
          ...state,
          currentDeck: [payload, ...state.currentDeck],
        };
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
