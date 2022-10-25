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
import { grid } from "@mui/system";

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
      height: "100%",
      width: "25%",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "absolute",
      right: "0",
    },
    button: {
      textAlign: "left",
    },
  };
});

export default function Flashcard() {
  const [flip, setFlip] = React.useState(false);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Card
          variant="contained"
          onClick={() => setFlip(!flip)}
          className={classes.flashcard}
          style={{
            backfaceVisibility: "hidden",
            transform: `rotateY(${flip ? "0.5" : "0"}turn)`,
          }}
        >
          Flashcard
        </Card>
        <Card
          variant="contained"
          onClick={() => setFlip(!flip)}
          className={classes.flashcard}
          style={{
            backfaceVisibility: "hidden",
            transform: `rotateY(${flip ? "0" : "-0.5"}turn)`,
          }}
        >
          Answer
        </Card>

        <div className={classes.buttonsCol}>
          <Button variant="outlined" className={classes.button}>
            Hard
          </Button>
          <Button variant="outlined">Medium</Button>
          <Button variant="outlined">Easy</Button>
          <Button variant="outlined">Pass</Button>
        </div>
      </div>
    </div>
  );
}
