import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Drawer,
  Paper,
  Stack,
  Button,
  Typography,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import ShufflingFlashcards from "./MainStories/ShufflingFlashcards/ShufflingFlashcards";
import FormControl from "./FormControl/FormControl";
import DrawerControl from "./DrawerControl/DrawerControl";

export default function AppStory() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem",
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
          <Route path="/deck/add" element={<ShufflingFlashcards />} />} />
          <Route path="/deck/edit" element={<FormControl mode={"edit"} />} />
          <Route path="/deck/delete" />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}
