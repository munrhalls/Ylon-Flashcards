import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

import { useStyles } from "./FlashcardEditStyles";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
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
            className={classes.editFlashcardInput}
            placeholder="Please enter text"
          />
          <MyFormHelperText className={classes.editFlashcardHelperText} />
        </FormControl>
      </Box>
    </div>
  );
}
