import React from "react";
import { useStyles } from "./FlashcardEditBtnsStyles";
import { Button, ButtonGroup, Hidden } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/SaveSharp";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { orange } from "@mui/material/colors";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function FlashcardEditBtns({ currFlashcard }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDeck = useSelector((state) => state.currentDeck);
  const unsavedChanges = useSelector((state) => state.unsavedChanges);
  
  return (
    <div className={classes.editBtnsCell}>
      <div className={classes.buttonGroupsWrapper}>
        <ButtonGroup className={classes.btnGroup1}>
          
          <Button
            component={Link}
            to={"/deck/edit"}
            state={currFlashcard}
            variant="contained"
            size="medium"
            className={classes.editBtn}
            startIcon={<EditIcon />}
          >
            <Hidden xsDown>Edit</Hidden>
          </Button>
          <Button
            component={Link}
            to={"/deck/delete"}
            variant="contained"
            size="medium"
            className={classes.deleteBtn}
            startIcon={<DeleteIcon />}
          >
            <Hidden xsDown>Delete</Hidden>
          </Button>
        </ButtonGroup>
        {unsavedChanges && (
          <ButtonGroup className={classes.btnGroup2}>
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
          </ButtonGroup>
        )}
      </div>
    </div>
  );
}
