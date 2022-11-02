import { AppBar, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme/Theme";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import ShufflingFlashcards from "./MainStories/ShufflingFlashcards/ShufflingFlashcards";
import AddingFlashcard from "./SideStories/AddingFlashcard";

export default function AppStory() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<ShufflingFlashcards />} />
          <Route path="/deck/add" element={<AddingFlashcard />} />
          <Route path="/deck/edit" />
          <Route path="/deck/delete" />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
