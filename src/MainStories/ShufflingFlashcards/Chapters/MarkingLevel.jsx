import React from "react";
import { Button, Hidden } from "@material-ui/core";
import MouseIcon from "@mui/icons-material/Mouse";
import { useStyles } from "./MarkingLevelStyle";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import { red, orange, blue, green } from "@mui/material/colors";
import { shuffleDeck } from "./../../../store/store";
import { useSelector, useDispatch } from "react-redux";

export default function MarkingDifficultyLevel() {
  const classes = useStyles();
  let cards = useSelector((state) => [...state.currentDeck.flashcards]);
  const dispatch = useDispatch();

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function shuffleHard() {
    let shuffleToNum;
    let shuffleToNumRnd;
    if (cards.length > 5 && cards.length < 15) {
      shuffleToNum = Math.ceil(cards.length / 3);
      // shuffleToNumRnd = getRandomArbitrary(shuffleToNum - 1, shuffleToNum + 1);  
    }
    if (cards.length > 15) {
      shuffleToNum = Math.ceil(cards.length / 4);
      shuffleToNumRnd = getRandomArbitrary(shuffleToNum - 1, shuffleToNum + 1);
    }
    if (cards.length > 5) {
      console.log(cards);
      const mvCard = cards.shift();
      cards.splice(shuffleToNumRnd, 0, mvCard);
      console.log(cards);
    }

    // alter by rnd + - 1 IF length > 5;
    // by 2 if length > 10

    //
  }

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
