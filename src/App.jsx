import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import ShufflingFlashcards from "./MainStories/ShufflingFlashcards/ShufflingFlashcards";
import FormControl from "./FormControl/FormControl";

export default function AppStory() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
    },
  });
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<ShufflingFlashcards />} />
          <Route path="/deck/add" element={<FormControl mode={"add"} />} />
          <Route path="/deck/edit" element={<FormControl mode={"edit"} />} />
          <Route
            path="/deck/delete"
            element={<FormControl mode={"delete"} />}
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
