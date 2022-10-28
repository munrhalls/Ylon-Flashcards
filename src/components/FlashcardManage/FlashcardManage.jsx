import * as React from "react";
import { Button, Hidden } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useStyles } from "./FlashcardEditStyles";
import SaveIcon from "@mui/icons-material/SaveSharp";
import DiscardIcon from "@mui/icons-material/BackspaceSharp";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import FlashcardForm from "../FlashcardForm/FlashcardForm";

export default function UseFormControl() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <FlashcardForm />

        <div className={classes.editFlashcardSubmitButtonContainer}>
          <Button
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
