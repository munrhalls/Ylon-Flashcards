import {
  Drawer,
  Paper,
  Stack,
  Button,
  Typography,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import StyleIcon from "@mui/icons-material/Style";
import { useStyles } from "./DrawerControlStyle";

import React from "react";
import { useSelector } from "react-redux";
import { setIsDrawerOpen } from "../store/store";

export default function DrawerControl() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const isDrawerOpen = useSelector((state) => state.app.isDrawerOpen);

  const DecksStack = (
    <Stack
      spacing={3}
      className="DecksStack"
      justifyContent="center"
      alignItems="center"
    >
      {state.app.decks.map((deck) => {
        return (
          <Paper
            variant="contained"
            key={deck?.title + "KEY"}
            className="DeckItem"
          >
            <Button startIcon={<StyleIcon />}>
              <Typography variant="subtitle2">{deck?.title}</Typography>
            </Button>
          </Paper>
        );
      })}
      }
    </Stack>
  );

  return (
    <div>
      DrawerControl
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={isDrawerOpen}
        anchor="left"
        children={DecksStack}
      ></Drawer>
    </div>
  );
}
