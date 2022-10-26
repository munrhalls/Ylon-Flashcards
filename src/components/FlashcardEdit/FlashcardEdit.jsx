import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./FlashcardEditStyles";
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
  console.log(location);

  const classes = useStyles();
  return (
    <div className={classes.flashcardCell}>
      <Box
        className={classes.editFlashcardContainer}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl className={classes.editFlashcardForm}>
          <OutlinedInput
            color="secondary"
            multiline
            maxRows="12"
            className={classes.editFlashcardInput}
            placeholder="Please enter text"
          />
          <MyFormHelperText className={classes.editFlashcardHelperText} />
        </FormControl>
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
