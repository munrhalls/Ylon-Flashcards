import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Button } from "@material-ui/core";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useStyles } from "./FlashcardFormStyles";
import FlipIcon from "@mui/icons-material/FlipCameraAndroidSharp";
import QMarkIcon from "@mui/icons-material/PsychologyAltSharp";
import AnswerIcon from "@mui/icons-material/QuestionAnswerSharp";
import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
  const helperText = React.useMemo(() => {
    if (focused) {
      return "Editing flashcard...";
    }
    return "Question/Answer";
  }, [focused]);
  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function FlashcardForm() {
  const dispatch = useDispatch();
  const flip = useSelector((state) => state.flip);
  const currFlashcard = useSelector((state) => state.decks[0][0]);
  const classes = useStyles();

  const testState = useSelector((state) => state);

  return (
    <Box
      className={classes.editFlashcardContainer}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Typography
        className={classes.editFlashcardTitle}
        variant="h6"
        sx={{ typography: { sm: "body1", xs: "body2" } }}
      >
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
              console.log(testState);
              dispatch({
                type: "EDIT__FLASHCARD",
                payload: { ...currFlashcard, answer: e.target.value },
              });
            }}
            color="secondary"
            multiline
            maxRows="6"
            inputProps={{ style: { fontSize: 14 } }}
            className={classes.editFlashcardInput}
            placeholder="Please enter text"
          />
        ) : (
          <OutlinedInput
            value={currFlashcard?.question || ""}
            onChange={(e) => {
              dispatch({
                type: "EDIT__FLASHCARD",
                payload: { ...currFlashcard, question: e.target.value },
              });
            }}
            color="secondary"
            multiline
            maxRows="6"
            inputProps={{ style: { fontSize: 14 } }}
            className={classes.editFlashcardInput}
            placeholder="Please enter text"
          />
        )}

        <MyFormHelperText className={classes.editFlashcardHelperText} />
      </FormControl>
      <Button
        size="small"
        variant="contained"
        onClick={() => dispatch({ type: "FLIP__FLASHCARD", payload: flip })}
      >
        <FlipIcon />
      </Button>
    </Box>
  );
}
