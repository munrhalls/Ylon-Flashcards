import React from "react";
import { useStyles } from "./AddingFlashcardStyle";

export default function AddingFlashcard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}></div>
    </div>
  );
}
