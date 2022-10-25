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
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function FlashcardEditBtns() {
  const classes = useStyles();
  return (
    <div className={classes.editBtnsCell}>
      <div className={classes.editBtnsCell}>
        <ButtonGroup>
          <Button
            variant="contained"
            size="large"
            className={classes.deleteBtn}
            startIcon={<AddBoxIcon />}
          >
            Add
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.deleteBtn}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            className={classes.editBtn}
            variant="contained"
            size="large"
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
