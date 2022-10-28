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
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "./../../App";

export default function FlashcardEditBtns({ currFlashcard }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.editBtnsCell}>
      <ButtonGroup>
        <Button
          onClick={() =>
            dispatch(add({ question: "Question...", answer: "Answer..." }))
          }
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
        )
      </ButtonGroup>
    </div>
  );
}
