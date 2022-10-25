import React from "react";
import Flashcard from "./components/Flashcard";

import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { sizing } from "@mui/system";

const useStyles = makeStyles((themes) => {
  return {
    flashcard: {
      border: "1px solid #000",
      height: "20rem",
      width: "15rem",
      margin: "auto",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
      width: "100%",
    },
    app: {
      minHeight: "100vh",
    },
  };
});

export default function App() {
  const classes = useStyles();

  return (
    <>
      <Flashcard />
    </>
  );
}
