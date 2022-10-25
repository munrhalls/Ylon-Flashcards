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
import { Routes, Route, Link } from "react-router-dom";

export default function FlashcardEditBtns({ setIsEdit }) {
  const classes = useStyles();

  const LinkOne = (props) => {
    return (
      <Button
        variant="contained"
        size="large"
        className={classes.deleteBtn}
        startIcon={<AddBoxIcon />}
      >
        <Hidden xsDown>Add</Hidden>
      </Button>
    );
  };

  return (
    <div className={classes.editBtnsCell}>
      <div className={classes.editBtnsCell}>
        <ButtonGroup>
          {/* <Button
            variant="contained"
            size="large"
            className={classes.deleteBtn}
            startIcon={<AddBoxIcon />}
          >
            <Hidden xsDown>Add</Hidden>
          </Button> */}
          <LinkOne></LinkOne>
          <Button
            variant="contained"
            size="large"
            className={classes.deleteBtn}
            startIcon={<EditIcon />}
          >
            <Hidden xsDown>Edit</Hidden>
          </Button>
          <Button
            className={classes.editBtn}
            variant="contained"
            size="large"
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
          >
            <Hidden xsDown>Delete</Hidden>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
