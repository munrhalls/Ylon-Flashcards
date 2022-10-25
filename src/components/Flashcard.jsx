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
      gridTemplateColumns: "25% 50% 75%",
      gridTemplateRows: "25% 50% 75%",
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
      width: "70%",
      position: "absolute",
      left: "0",
    },
    flashcardFlipped: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "100%",
      width: "70%",
      webkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    },
    buttonsCol: {
      height: "95%",
      width: "25%",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "absolute",
      top: "2.5%",
      bottom: "2.5%",
      right: "2.5%",
    },
    button: {
      textAlign: "left",
    },
    hard: {
      backgroundColor: red[900],
    },
    medium: {
      backgroundColor: orange[900],
    },
    easy: {
      backgroundColor: blue[900],
    },
    pass: {
      backgroundColor: green[900],
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
