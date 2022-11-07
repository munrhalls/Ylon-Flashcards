import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import StyleIcon from "@mui/icons-material/Style";

import { useStyles } from "./DecksStyle";
import { useSelector } from "react-redux";
import React from "react";

export default function Decks() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.decksCell}></div>
    </div>
  );
}
