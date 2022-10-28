import * as React from "react";
import { Button, Hidden } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useStyles } from "./FlashcardManageStyles";
import SaveIcon from "@mui/icons-material/SaveSharp";
import DiscardIcon from "@mui/icons-material/BackspaceSharp";
import { Link } from "react-router-dom";
import FlashcardForm from "../FlashcardForm/FlashcardForm";
import { useDispatch } from "react-redux";
import { add } from "./../store/store";

export default function UseFormControl() {
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <FlashcardForm />

        <div className={classes.editFlashcardSubmitButtonContainer}>
          <Button
            onClick={() => dispatch(add({ question: "Q2", answer: "A2" }))}
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
