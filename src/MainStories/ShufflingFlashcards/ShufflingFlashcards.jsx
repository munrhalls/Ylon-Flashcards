import FlippingCard from "./Chapters/FlippingCard";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import { useStyles } from "./ShufflingFlashcardsStyle";
import { Nav } from "./Nav/Nav";
import React from "react";
import { useSelector } from "react-redux";

export default function ShufflingFlashcards() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <FlippingCard />
        <MarkingDifficultyLevel />
      </div>
      <div className={classes.linksCell}>
        <Nav.Group>
          <Nav.ToAddingFlashcard />
          <Nav.ToEditingFlashcard />
          <Nav.ToDeletingFlashcard />
          <Nav.SavingChanges />
        </Nav.Group>
      </div>
    </div>
  );
}
