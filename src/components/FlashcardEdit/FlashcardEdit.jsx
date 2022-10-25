import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Container,
  Box,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  Card,
  TextField,
} from "@material-ui/core";

import { useStyles } from "./FlashcardEditStyles";

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
          variant="outlined"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
