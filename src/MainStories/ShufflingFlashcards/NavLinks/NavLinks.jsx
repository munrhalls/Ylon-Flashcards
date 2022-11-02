import { Button, ButtonGroup, Hidden } from "@material-ui/core";
import {
  AddBoxIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
} from "@mui/icons-material";
import { useStyles } from "./NavLinksStyle";

import React from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export const NavLinks = {
  toAddingFlashcard: function () {
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
  btnsGroup: function () {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentDeck = useSelector((state) => state.currentDeck);
    const unsavedChanges = useSelector((state) => state.unsavedChanges);
    return <ButtonGroup></ButtonGroup>;
  },
};
