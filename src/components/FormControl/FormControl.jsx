import * as React from "react";
import { Button, Hidden } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useStyles } from "./FormControlStyles";
import SaveIcon from "@mui/icons-material/SaveSharp";
import DiscardIcon from "@mui/icons-material/BackspaceSharp";
import { Link, useLocation } from "react-router-dom";
import FlashcardForm from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { addFlashcard } from "../store/store";
import { editFlashcard } from "../store/store";

import { setUnsavedChanges } from "../store/store";

export default function FormControl() {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/");
  const mode = path[path.length - 1];
  console.log(mode);

  const currFlashcard = useSelector((state) => state.currentDeck.flashcards[0]);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <FlashcardForm
          title={mode === "add" ? "Add flashcard" : "Edit flashcard"}
        />

        <div className={classes.editFlashcardSubmitButtonContainer}>
          <Button
            onClick={() => {
              if (mode === "add") {
                dispatch(addFlashcard({ ...currFlashcard }));
              }
              dispatch(setUnsavedChanges(true));
            }}
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
