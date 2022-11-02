import FlippingCard from "./Chapters/FlippingCard";
import React from "react";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import { useStyles } from "./ShufflingFlashcardsStyle";
import AddingFlashcard from "../../SideStories/AddingFlashcard";

export default function ShufflingFlashcards() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <FlippingCard />
        <MarkingDifficultyLevel />
      </div>
      <div className={classes.linksCell}>
        <AddingFlashcard />
      </div>
    </div>
  );
}
