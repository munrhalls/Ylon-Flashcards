import FlippingCard from "./Chapters/FlippingCard";
import React from "react";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import { useStyles } from "./ShufflingFlashcardsStyle";
import AddingFlashcard from "../../SideStories/AddingFlashcard";
import { Nav } from "./Nav/Nav";

export default function ShufflingFlashcards() {
  const classes = useStyles();

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
        </Nav.Group>
      </div>
    </div>
  );
}
