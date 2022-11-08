import React from "react";
import { Button, Hidden } from "@material-ui/core";
import MouseIcon from "@mui/icons-material/Mouse";
import { useStyles } from "./MarkingLevelStyle";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import { red, orange, blue, green } from "@mui/material/colors";
import { setCurrentDeck } from "./../../../store/store";
import { useSelector, useDispatch } from "react-redux";

export default function MarkingDifficultyLevel() {
  const classes = useStyles();
  let currentDeck = useSelector((state) => state.currentDeck.currentDeck);

  let cards = [...currentDeck.flashcards];

  const dispatch = useDispatch();

  function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  function divideBy(by) {
    return Math.ceil(cards.length / by);
  }
  function numToShuffleTo() {
    let shuffleToNumRnd;

    if (cards.length > 5 && cards.length < 15) {
      shuffleToNumRnd = getRandomArbitrary(divideBy(3) - 1, divideBy(3) + 1);
    }
    if (cards.length > 15) {
      shuffleToNumRnd = getRandomArbitrary(divideBy(4) - 1, divideBy(4) + 1);
    }
    if (cards.length < 5 && cards.length > 1) {
      shuffleToNumRnd = getRandomArbitrary(1, divideBy(1));
    }
    return shuffleToNumRnd;
  }

  function shuffleHard() {
    const shuffleToNumRnd = numToShuffleTo();
    if (cards.length > 1) {
      let mvCard = cards.shift();
      cards.splice(shuffleToNumRnd, 0, { ...mvCard, level: "hard" });
      dispatch(setCurrentDeck({ ...currentDeck, flashcards: cards }));
    }
  }

  function shuffleMedium() {}

  return (
    <div className={classes.difficultyButtons}>
      <Button
        onClick={() => shuffleHard()}
        style={{ backgroundColor: red[900] }}
        variant="contained"
        size="large"
        className={classes.btn}
      >
        <SquareRoundedIcon className={classes.lvlIcon} />
        <SquareRoundedIcon className={classes.lvlIcon} />
        <SquareRoundedIcon className={classes.lvlIcon} />
      </Button>
      <Button
        onClick={() => shuffleMedium()}
        style={{ backgroundColor: orange[900] }}
        variant="contained"
        size="large"
        className={classes.btn}
      >
        <SquareRoundedIcon className={classes.lvlIcon} />
        <SquareRoundedIcon className={classes.lvlIcon} />
      </Button>
      <Button
        style={{ backgroundColor: blue[900] }}
        variant="contained"
        size="large"
        className={classes.btn}
      >
        <SquareRoundedIcon className={classes.lvlIcon} />
      </Button>
      <Button
        style={{ backgroundColor: green[900] }}
        variant="contained"
        size="large"
        className={classes.btn}
      >
        <NextPlanIcon className={classes.next} />
      </Button>
    </div>
  );
}
