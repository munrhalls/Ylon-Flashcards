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

import { useStyles } from "./FlashcardStyles";

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

        <div className={classes.difficultyButtons}>
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
      <div className={classes.editBtnsCell}>
        <Button variant="contained" size="large" className={classes.deleteBtn}>
          Edit
        </Button>
        <Button
          className={classes.editBtn}
          variant="contained"
          size="large"
          className={classes.deleteBtn}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
