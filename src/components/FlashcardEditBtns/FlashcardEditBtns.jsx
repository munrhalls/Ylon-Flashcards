import React from "react";
import { useStyles } from "./FlashcardEditBtnsStyles";
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
  Hidden,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/SaveSharp";

import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "./../store/store";

export default function FlashcardEditBtns({ currFlashcard }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.editBtnsCell}>
      <ButtonGroup>
        <Button
          component={Link}
          to={"/flashcard/add"}
          variant="contained"
          size="large"
          className={classes.addBtn}
          startIcon={<AddBoxIcon />}
        >
          <Hidden xsDown>Add</Hidden>
        </Button>
        <Button
          component={Link}
          to={"/flashcard/edit"}
          state={currFlashcard}
          variant="contained"
          size="large"
          className={classes.editBtn}
          startIcon={<EditIcon />}
        >
          <Hidden xsDown>Edit</Hidden>
        </Button>
        <Button
          component={Link}
          to={"/flashcard/delete"}
          variant="contained"
          size="large"
          className={classes.deleteBtn}
          startIcon={<DeleteIcon />}
        >
          <Hidden xsDown>Delete</Hidden>
        </Button>

        <Button
          component={Link}
          to={"/flashcard/delete"}
          variant="contained"
          size="large"
          className={classes.deleteBtn}
          startIcon={<SaveIcon />}
        >
          <Hidden xsDown>Save changes</Hidden>
        </Button>
      </ButtonGroup>
    </div>
  );
}
