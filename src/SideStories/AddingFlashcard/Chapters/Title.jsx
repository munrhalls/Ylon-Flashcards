import { useStyles } from "./TitleStyle";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";
import FlipIcon from "@mui/icons-material/FlipCameraAndroidSharp";
import QMarkIcon from "@mui/icons-material/PsychologyAltSharp";
import AnswerIcon from "@mui/icons-material/QuestionAnswerSharp";

import React from "react";
import { useSelector } from "react-redux";

export default function Title({ title }) {
  const classes = useStyles();
  const flipped = useSelector((state) => state.flipped);

  return (
    <>
      <Typography
        className={classes.title}
        variant="h4"
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
    </>
  );
}
