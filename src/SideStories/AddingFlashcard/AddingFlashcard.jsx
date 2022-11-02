import React from "react";
import { useStyles } from "./AddingFlashcardStyle";
import Title from "./../../Composables/Title";
import Form from "./../../Composables/Form";

export default function AddingFlashcard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Title title="Add flashcard" />
        <Form />
      </div>
      <div className={classes.linksCell}>
        <div>confirm</div>
        <div>discard</div>
      </div>
    </div>
  );
}
