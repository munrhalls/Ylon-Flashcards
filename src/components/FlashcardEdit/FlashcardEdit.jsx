import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Button } from "@material-ui/core";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useStyles } from "./FlashcardEditStyles";
import FlipIcon from "@mui/icons-material/FlipCameraAndroidSharp";
import QMarkIcon from "@mui/icons-material/PsychologyAltSharp";
import AnswerIcon from "@mui/icons-material/QuestionAnswerSharp";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
  const helperText = React.useMemo(() => {
    if (focused) {
      return "Editing flashcard...";
    }
    return "Type to edit flashcard";
  }, [focused]);
  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  const location = useLocation();
  const [currFlashcard, setCurrFlashcard] = React.useState(location.state);
  const [flip, setFlip] = React.useState(false);

  const classes = useStyles();
  return (
    <div className={classes.flashcardCell}>
      <Box
        className={classes.editFlashcardContainer}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Typography className={classes.editFlashcardTitle} variant="h5">
          Edit flashcard
        </Typography>
        <FormControlLabel
          label={flip ? "Answer" : "Question"}
          control={
            <Checkbox
              checked={flip}
              icon={<QMarkIcon />}
              checkedIcon={<AnswerIcon />}
            />
          }
        />
        <FormControl className={classes.editFlashcardForm}>
          {flip ? (
            <OutlinedInput
              value={currFlashcard?.answer || ""}
              onChange={(e) => {
                setCurrFlashcard({ ...currFlashcard, answer: e.target.value });
              }}
              color="secondary"
              multiline
              maxRows="12"
              className={classes.editFlashcardInput}
              placeholder="Please enter text"
            />
          ) : (
            <OutlinedInput
              value={currFlashcard?.question || ""}
              onChange={(e) => {
                setCurrFlashcard({
                  ...currFlashcard,
                  question: e.target.value,
                });
              }}
              color="secondary"
              multiline
              maxRows="12"
              className={classes.editFlashcardInput}
              placeholder="Please enter text"
            />
          )}

          <MyFormHelperText className={classes.editFlashcardHelperText} />
        </FormControl>
        <Button
          onClick={() => setFlip(!flip)}
          variant="contained"
          size="large"
          startIcon={<FlipIcon />}
        >
          Flip
        </Button>
      </Box>

      <div className={classes.editFlashcardSubmitButtonContainer}>
        <Button
          className={classes.editFlashcardSubmitButton}
          type="submit"
          variant="contained"
        >
          Save
        </Button>
        <Button
          component={Link}
          to={"/"}
          className={classes.editFlashcardDiscardButton}
          type="submit"
          variant="contained"
        >
          Discard
        </Button>
      </div>
    </div>
  );
}
