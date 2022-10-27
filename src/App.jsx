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
      flashcards: {
        byId: {
          flashcard1: {
            question: "",
            answer: "",
          },
        },
        allIds: ["flashcard1"],
      },
      flip: false,
    },
    { type, payload }
  ) => {
    console.log(state.flashcards.byId.flashcard1);

    switch (type) {
      case "FLIP__FLASHCARD":
        return {
          ...state,
          flip: !payload,
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
