import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import ShufflingFlashcards from "./MainStories/ShufflingFlashcards/ShufflingFlashcards";
import { AppBar, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme/Theme";
import FormControl from "./components/FormControl/FormControl";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";

export default function AppStory() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<ShufflingFlashcards />} />
          <Route path="/deck/add" />
          <Route path="/deck/edit" />
          <Route path="/deck/delete" />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
