import { Button, ButtonGroup, Hidden } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/SaveSharp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useStyles } from "./NavStyle";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Nav = {
  ToAddingFlashcard: function () {
    const classes = useStyles();

    return (
      <Button
        component={Link}
        to={"/deck/add"}
        variant="contained"
        size="medium"
        className={classes.addBtn}
        startIcon={<AddBoxIcon />}
      >
        <Hidden xsDown>Add</Hidden>
      </Button>
    );
  },
  ToEditingFlashcard: function () {
    const classes = useStyles();

    return (
      <Button
        component={Link}
        to={"/deck/edit"}
        variant="contained"
        size="medium"
        className={classes.editBtn}
        startIcon={<EditIcon />}
      >
        <Hidden xsDown>Edit</Hidden>
      </Button>
    );
  },
  Group: function ({ children }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentDeck = useSelector((state) => state.currentDeck);
    const unsavedChanges = useSelector((state) => state.unsavedChanges);
    return <ButtonGroup>{children}</ButtonGroup>;
  },
};
