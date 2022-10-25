import React from "react";
import Flashcard from "./components/Flashcard/Flashcard";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import { Routes, Route, Link } from "react-router-dom";
import UseFormControl from "./components/FlashcardEdit/FlashcardEdit";

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

  const LinkOne = (props) => {
    return <div>Link One, inside of it</div>;
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Routes>
          <Route path="/" element={<Flashcard />} />
          <Route
            path="/link-one"
            element={
              <Flashcard>
                <UseFormControl />
              </Flashcard>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
