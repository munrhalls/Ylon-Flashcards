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
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentFlashcard = useSelector(
    (state) => state.currentDeck.flashcards[0]
  );
  const flashcardDraft = useSelector((state) => state.app.flashcardDraft);

  useEffect(() => {
    handleDraft();

    return () => {
      resetDraft();
    };
  }, []);

  function handleDraft() {
    if (mode === "edit") {
      dispatch(setFlashcardDraft({ ...currentFlashcard }));
    }
  }

  function resetDraft() {
    dispatch(
      setFlashcardDraft({ question: "Question...", answer: "Answer..." })
    );
  }

  function handleAdd() {
    dispatch(addFlashcard(flashcardDraft));
    resetDraft();
  }
  function handleEdit() {
    dispatch(setFlashcard(flashcardDraft));
    resetDraft();
  }

  function handleDispatch() {
    if (mode === "add") {
      handleAdd();
    }
    if (mode === "edit") {
      handleEdit();
    }
    dispatch(setUnsavedChanges(true));
  }

  function handleFormTitle() {
    return mode === "add" ? "Add flashcard" : "Edit flashcard";
  }

  function handleSaveBtnTitle() {
    return mode === "add" ? "Add" : "Save";
  }

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Form title={handleFormTitle()} />

        <div className={classes.editFlashcardSubmitButtonContainer}>
          <Button
            onClick={() => handleDispatch()}
            component={Link}
            to={"/"}
            size="large"
            className={classes.editFlashcardSubmitButton}
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            <Hidden xsDown>
              <Typography variant="subtitle">{handleSaveBtnTitle()}</Typography>
            </Hidden>
          </Button>
          <Button
            size="large"
            onClick={() => resetDraft()}
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
