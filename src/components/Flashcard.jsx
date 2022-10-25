import React from "react";

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
import {
  purple,
  blue,
  green,
  orange,
  red,
  yellow,
  grey,
} from "@mui/material/colors";

const useStyles = makeStyles((themes) => {
  return {
    container: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "15% 75% 90%",
      gridTemplateRows: "15% 75% 90%",
    },
    flashcardCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "2",
      gridRowEnd: "2",
      display: "flex",
      justifyContent: "flex-end",
      perspective: "1000px",
      position: "relative",
      zIndex: "1",
      backgroundColor: "#000",
    },
    flashcard: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "100%",
      width: "60%",
      position: "absolute",
      left: "0",
    },
    flashcardFlipped: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "100%",
      width: "60%",
      webkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    },
    buttonsCol: {
      height: "95%",
      width: "35%",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "space-between",

      position: "absolute",
      margin: "auto 0",
      top: "2.5%",
      bottom: "2.5%",
      right: "2.5%",
    },
    hard: {
      backgroundColor: red[900],
      flex: "1",
      margin: "2.5% 0",
    },
    medium: {
      backgroundColor: orange[900],
      flex: "1",
      margin: "2.5% 0",
    },
    easy: {
      backgroundColor: blue[900],
      flex: "1",
      margin: "2.5% 0",
    },
    pass: {
      backgroundColor: green[900],
      flex: "1",
      margin: "2.5% 0",
    },
  };
});

export default function Flashcard() {
  const [flip, setFlip] = React.useState(false);

  const classes = useStyles();
  const frontFlip = {
    backfaceVisibility: "hidden",
    transition: "transform 1s ease",
    transform: `rotateY(${flip ? "0.5" : "0"}turn)`,
  };

  const backFlip = {
    backfaceVisibility: "hidden",
    transition: "transform 1s ease",
    transform: `rotateY(${flip ? "0" : "-0.5"}turn)`,
  };

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Card
          variant="contained"
          onClick={() => setFlip(!flip)}
          className={classes.flashcard}
          style={frontFlip}
        >
          Flashcard
        </Card>
        <Card
          variant="contained"
          onClick={() => setFlip(!flip)}
          className={classes.flashcard}
          style={backFlip}
        >
          Answer
        </Card>

        <div className={classes.buttonsCol}>
          <Button variant="contained" size="large" className={classes.hard}>
            Hard
          </Button>
          <Button variant="contained" size="large" className={classes.medium}>
            Medium
          </Button>
          <Button variant="contained" size="large" className={classes.easy}>
            Easy
          </Button>
          <Button variant="contained" size="large" className={classes.pass}>
            Pass
          </Button>
        </div>
      </div>
    </div>
  );
}
