import * as React from "react";
import { Button, Hidden } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useStyles } from "./UseFormControlStyles";
import SaveIcon from "@mui/icons-material/SaveSharp";
import DiscardIcon from "@mui/icons-material/BackspaceSharp";
import { Link } from "react-router-dom";
import FlashcardForm from "../FlashcardForm/FlashcardForm";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../store/store";
import { editFlashcard } from "../store/store";

import { setUnsavedChanges } from "../store/store";

export default function UseFormControl({ title }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const Title = function () {
    return <span>'Edit Flashcard'</span>;
  };
  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <FlashcardForm title={title} />
        88
        <div className={classes.editFlashcardSubmitButtonContainer}>
          <Button
            onClick={() => {
              dispatch(addFlashcard({ question: "Q2", answer: "A2" }));
              dispatch(setUnsavedChanges(true));
            }}
            size="large"
            className={classes.editFlashcardSubmitButton}
            type="submit"
            variant="contained"
            startIcon={<SaveIcon />}
          >
            <Hidden xsDown>
              <Typography variant="subtitle">Save</Typography>
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
