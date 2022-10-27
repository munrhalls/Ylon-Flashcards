import React from "react";
import FlashcardEditBtns from "../FlashcardEditBtns/FlashcardEditBtns";
import DifficultyBtns from "../DifficultyBtns/DifficultyBtns";
import UseFormControl from "../FlashcardEdit/FlashcardEdit";
import { Card } from "@material-ui/core";
import { useStyles } from "./FlashcardStyles";
import { useDispatch, useSelector } from "react-redux";

const currFlashcard = {
  id: "1",
  question: "Question",
  answer: "Answer",
};

export default function Flashcard({ children }) {
  const dispatch = useDispatch();
  const flip = useSelector((state) => state.flip);
  console.log(flip);

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
          variant="elevation"
          onClick={() =>
            dispatch({
              type: "FLIP__FLASHCARD",
              payload: flip,
            })
          }
          className={classes.flashcard}
          style={frontFlip}
        >
          {currFlashcard.question}
        </Card>
        <Card
          variant="elevation"
          onClick={() =>
            dispatch({
              type: "FLIP__FLASHCARD",
              payload: flip,
            })
          }
          className={classes.flashcard}
          style={backFlip}
        >
          {currFlashcard.answer}
        </Card>
        <DifficultyBtns />
      </div>
      <FlashcardEditBtns currFlashcard={currFlashcard} />
    </div>
  );
}
