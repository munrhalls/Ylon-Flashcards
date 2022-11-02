import FormControl, { useFormControl } from "@mui/material/FormControl";
import { useStyles } from "./FormStyle";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlippingInput from "./FlippingInput";
import FlipBtn from "./FlipBtn";
import { HelperText } from "./HelperText";

export default function Form() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const classes = useStyles();

  return (
    <FormControl className={classes.form}>
      <FlippingInput />
      <HelperText normal="Question/Answer" focusTxt="Editing flashcard..." />
    </FormControl>
  );
}
