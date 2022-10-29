import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import { AppBar, Toolbar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme/Theme";
import UseFormControl from "./components/FlashcardManage/FlashcardManage";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./components/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Flashcard />} />
          <Route path="/deck/add" element={<UseFormControl />} />
          <Route path="/deck/edit" element={<UseFormControl />} />
          <Route path="/deck/delete" element={<Flashcard />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
