import FormControl, { useFormControl } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { useStyles } from "./FormStyle";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlippingInput from "./FlippingInput";
import FlipBtn from "./FlipBtn";

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

export default function Form() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const classes = useStyles();

  return (
    <FormControl className={classes.form}>
      <FlippingInput />
      <MyFormHelperText className={classes.editFlashcardHelperText} />
      <FlipBtn />
    </FormControl>
  );
}
