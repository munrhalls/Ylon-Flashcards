import React, { useEffect } from "react";
import { Button, Hidden } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useStyles } from "./FormControlStyle";
import SaveIcon from "@mui/icons-material/SaveSharp";
import DiscardIcon from "@mui/icons-material/BackspaceSharp";
import { Link } from "react-router-dom";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { addFlashcard } from "../store/store";
import { setFlashcard } from "../store/store";
import { setFlashcardDraft } from "../store/store";

import { setUnsavedChanges } from "../store/store";

export default function FormControl({ mode }) {
  const state = useSelector((state) => state);
  console.log(state.currentDeck.flashcards);

  const dispatch = useDispatch();
  const currentFlashcard = useSelector(
    (state) => state.currentDeck.flashcards[0]
  );
  const flashcardDraft = useSelector((state) => state.flashcardDraft);

  const classes = useStyles();

  function handleDraft() {
    if (mode === "edit") {
      dispatch(setFlashcardDraft({ ...currentFlashcard }));
    }
  }

  function handleDispatch() {
    if (mode === "add") {
      dispatch(addFlashcard(flashcardDraft));
    }
    if (mode === "edit") {
      dispatch(setFlashcard(flashcardDraft));
    }
    dispatch(setUnsavedChanges(true));
  }

  useEffect(() => {
    handleDraft();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Form title={mode === "add" ? "Add flashcard" : "Edit flashcard"} />

        <div className={classes.editFlashcardSubmitButtonContainer}>
          <Button
            onClick={() => handleDispatch()}
            size="large"
            className={classes.editFlashcardSubmitButton}
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            <Hidden xsDown>
              <Typography variant="subtitle">
                {mode === "add" ? "Add" : "Save"}
              </Typography>
            </Hidden>
          </Button>
          <Button
            size="large"
            component={Link}
            to={"/"}
            className={classes.editFlashcardDiscardButton}
            type="submit"
            variant="contained"
            startIcon={<DiscardIcon />}
          >
            <Hidden xsDown>
              <Typography variant="subtitle">Discard</Typography>
            </Hidden>
          </Button>
        </div>
      </div>
    </div>
  );
}
