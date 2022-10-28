import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import UseFormControl from "./components/FlashcardManage/FlashcardManage";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function App() {
  const stateReducer = (
    state = {
      flashcards: {
        byId: {
          flashcard1: {
            id: "flashcard1",
            question: "Question...",
            answer: "Answer...",
          },
        },
        allIds: ["flashcard1"],
      },
      flip: false,
    },
    { type, payload }
  ) => {
    console.log(state.flashcards);
    switch (type) {
      case "FLIP__FLASHCARD":
        return {
          ...state,
          flip: !payload,
        };
      case "ADD__FLASHCARD":
        const addedFlashcards = { ...state.flashcards };
        addedFlashcards.byId.flashcard1 = payload;
        
        return {
          ...state,
          flashcards: addedFlashcards,
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
