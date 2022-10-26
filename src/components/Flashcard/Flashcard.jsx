import React from "react";
import FlashcardEditBtns from "../FlashcardEditBtns/FlashcardEditBtns";
import DifficultyBtns from "../DifficultyBtns/DifficultyBtns";
import UseFormControl from "../FlashcardEdit/FlashcardEdit";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Card,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./FlashcardStyles";

const currFlashcard = {
  id: "1",
  question: "Question",
  answer: "Answer",
};
export default function Flashcard({ children }) {
  const [flip, setFlip] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
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
    <>
      <div className={classes.flashcardCell}>
        <Card
          variant="elevation"
          onClick={() => setFlip(!flip)}
          className={classes.flashcard}
          style={frontFlip}
        >
          {currFlashcard.question}
        </Card>
        <Card
          variant="elevation"
          onClick={() => setFlip(!flip)}
          className={classes.flashcard}
          style={backFlip}
        >
          {currFlashcard.answer}
        </Card>
        <DifficultyBtns />
      </div>
      <FlashcardEditBtns currFlashcard={currFlashcard} />
    </>
  );
}
