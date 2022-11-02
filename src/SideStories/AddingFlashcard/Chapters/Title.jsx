import { useStyles } from "./TitleStyle";
import { Typography } from "@mui/material";
import React from "react";

export default function Title({ title }) {
  const classes = useStyles();
  return (
    <Typography
      className={classes.titleCell}
      variant="h6"
      sx={{ typography: { sm: "body1", xs: "body2" } }}
    >
      {title}
    </Typography>
  );
}
