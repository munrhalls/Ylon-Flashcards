import { Card } from "@material-ui/core";
import { useStyles } from "./FlippingCardStyle";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { flip } from "../../../store/store";

export default function FlippingCard() {
  const classes = useStyles();
  const flipped = useSelector((state) => state.app.flipped);
  const currFlashcard = useSelector((state) => state.currentDeck.flashcards[0]);
  const dispatch = useDispatch();

  const styles = {
    front: {
      backfaceVisibility: "hidden",
      transition: "transform 1s ease",
      transform: `rotateY(${flipped ? "0.5" : "0"}turn)`,
    },
    back: {
      backfaceVisibility: "hidden",
      transition: "transform 1s ease",
      transform: `rotateY(${flipped ? "0" : "-0.5"}turn)`,
    },
  };

  return (
    <>
      <Card
        variant="elevation"
        onClick={() => dispatch(flip(flipped))}
        className={classes.flashcard}
        style={styles.front}
      >
        {currFlashcard?.question}
      </Card>

      <Card
        variant="elevation"
        onClick={() => dispatch(flip(flipped))}
        className={classes.flashcard}
        style={styles.back}
      >
        {currFlashcard?.answer}
      </Card>
    </>
  );
}
