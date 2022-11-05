import React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Button } from "@material-ui/core";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useStyles } from "./FormStyle";
import FlipIcon from "@mui/icons-material/FlipCameraAndroidSharp";
import QMarkIcon from "@mui/icons-material/PsychologyAltSharp";
import AnswerIcon from "@mui/icons-material/QuestionAnswerSharp";
import { useDispatch, useSelector } from "react-redux";
import { setFlashcardDraft } from "./../store/store";

export default function Form({ title }) {
  const dispatch = useDispatch();
  const flashcardDraft = useSelector((state) => state.app.flashcardDraft);
  const flipped = useSelector((state) => state.app.flipped);
  const classes = useStyles();

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
        {title}
      </Typography>

      <FormControlLabel
        label={flipped ? "Answer" : "Question"}
        control={
          <Checkbox
            checked={flipped}
            icon={<QMarkIcon />}
            checkedIcon={<AnswerIcon />}
          />
        }
      />
      <FormControl className={classes.editFlashcardForm}>
        {flipped ? (
          <OutlinedInput
            value={flashcardDraft?.answer}
            onChange={(e) => {
              let draft = { ...flashcardDraft };
              draft.answer = e.target.value;
              dispatch(setFlashcardDraft(draft));
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
            value={flashcardDraft?.question}
            onChange={(e) => {
              let draft = { ...flashcardDraft };
              draft.question = e.target.value;
              dispatch(setFlashcardDraft(draft));
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
        onClick={() => dispatch({ type: "FLIP", payload: flipped })}
      >
        <FlipIcon />
      </Button>
    </Box>
  );
}

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
