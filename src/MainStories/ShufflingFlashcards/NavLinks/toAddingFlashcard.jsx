import React from "react";
import { Button, Hidden } from "@material-ui/core";
import { Link } from "react-router";

export default function toAddingFlashcard() {
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
}
