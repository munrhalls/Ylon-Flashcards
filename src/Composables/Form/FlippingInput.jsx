import { OutlinedInput } from "@mui/material";
import { useStyles } from "./FlippingInputStyle";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlipIcon from "@mui/icons-material/FlipCameraAndroidSharp";
import { Button } from "@material-ui/core";
import { flip } from "../../store/store";

export default function FlippingInput() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const dispatch = useDispatch();
  const flipped = useSelector((state) => state.flipped);
  const classes = useStyles();

  return (
    <div>
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
      <Button
        className={classes.flipBtn}
        size="small"
        variant="contained"
        onClick={() => dispatch(flip(flipped))}
      >
        <FlipIcon />
      </Button>
    </div>
  );
}
