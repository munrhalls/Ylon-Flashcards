import React from "react";
import { useStyles } from "./DifficultyBtnsStyles";
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
} from "@material-ui/core";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function DifficultyBtns() {
  const classes = useStyles();

  return (
    <div className={classes.difficultyButtons}>
      <Button
        endIcon={<ArrowForwardIosIcon />}
        variant="contained"
        size="large"
        className={classes.hard}
      >
        Hard
      </Button>
      <Button
        endIcon={<ArrowForwardIosIcon />}
        variant="contained"
        size="large"
        className={classes.medium}
      >
        Medium
      </Button>
      <Button
        endIcon={<ArrowForwardIosIcon />}
        variant="contained"
        size="large"
        className={classes.easy}
      >
        Easy
      </Button>
      <Button
        endIcon={<ArrowForwardIosIcon />}
        variant="contained"
        size="large"
        className={classes.pass}
      >
        Pass
      </Button>
    </div>
  );
}
