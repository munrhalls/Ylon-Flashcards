import { Button, ButtonGroup, Hidden } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/SaveSharp";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useStyles } from "./NavStyle";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFlashcard } from "../../../store/store";
import { setIsDrawerOpen } from "../../../store/store";

export const Nav = {
  ToAddingFlashcard: function ({ text }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
      <Button
        component={Link}
        to={"/deck/add"}
        onClick={() => dispatch(setIsDrawerOpen(true))}
        variant="contained"
        size="medium"
        className={classes.addBtn}
        startIcon={<AddBoxIcon />}
      >
        <Hidden xsDown>{text ? text : " Add"}</Hidden>
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
  ToDeletingFlashcard: function () {
    const dispatch = useDispatch();
    const classes = useStyles();

    function handleDeleteCard() {
      const currCardIndex = 0;
      dispatch(deleteFlashcard(currCardIndex));
    }

    return (
      <Button
        onClick={() => handleDeleteCard()}
        variant="contained"
        size="medium"
        className={classes.deleteBtn}
        startIcon={<DeleteIcon />}
      >
        <Hidden xsDown>Delete</Hidden>
      </Button>
    );
  },
  DecksList: function () {
    return <h1>DecksList</h1>;
  },
  CurrentDeck: function () {
    return <h1>deck</h1>;
  },
  SavingChanges: function () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentDeck = useSelector((state) => state.currentDeck);
    const unsavedChanges = useSelector((state) => state.unsavedChanges);
    
    return (
      <>
        {unsavedChanges && (
          <Button
            className={classes.saveBtnActive}
            onClick={() =>
              dispatch({
                type: "DECK__UPDATE__REQUESTED",
                payload: currentDeck,
              })
            }
            component={Link}
            variant="contained"
            size="medium"
            startIcon={<SaveIcon />}
          >
            <Hidden xsDown>Save changes</Hidden>
          </Button>
        )}
      </>
    );
  },
  Group: function ({ children }) {
    const classes = useStyles();
    return <ButtonGroup className={classes.btnGroup}>{children}</ButtonGroup>;
  },
};
