import { OutlinedInput } from "@mui/material";
import { useStyles } from "./FlippingInputStyle";

import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function FlippingInput() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const flipped = useSelector((state) => state.flipped);
  const classes = useStyles();

  return (
    <>
      {flipped ? (
        <OutlinedInput
          value={q}
          onChange={(e) => {
            setQ(() => e.target.value);
          }}
          color="secondary"
          multiline
          maxRows="6"
          className={classes.outlinedInput}
          placeholder="Please enter text"
        />
      ) : (
        <OutlinedInput
          value={a}
          onChange={(e) => {
            setA(() => e.target.value);
          }}
          color="secondary"
          multiline
          maxRows="6"
          inputProps={{ style: { fontSize: 14 } }}
          className={classes.outlinedInput}
          placeholder="Please enter text"
        />
      )}
    </>
  );
}
