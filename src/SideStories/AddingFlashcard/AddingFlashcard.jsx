import React from "react";
import { useStyles } from "./AddingFlashcardStyle";
import Title from "./Chapters/Title";

export default function AddingFlashcard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Title title="Add flashcard" />
        
      </div>
    </div>
  );
}
