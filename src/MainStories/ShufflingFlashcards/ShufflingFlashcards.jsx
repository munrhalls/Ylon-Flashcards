import FlippingCard from "./Chapters/FlippingCard";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import { useStyles } from "./ShufflingFlashcardsStyle";
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
import { Nav } from "./Nav/Nav";
import React from "react";
import { useSelector } from "react-redux";

export default function ShufflingFlashcards() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state);
  const isDrawerOpen = useSelector((state) => state.app.isDrawerOpen);
  console.log(state);

  function toggleDrawer() {}

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
    <div className={classes.container}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={isDrawerOpen}
        anchor="left"
        children={DecksStack}
      ></Drawer>
      <div className={classes.flashcardCell}>
        <Button className={classes.drawerBtn} onClick={toggleDrawer()}></Button>
        <FlippingCard />
        <MarkingDifficultyLevel />
      </div>
      <div className={classes.linksCell}>
        <Nav.Group>
          <Nav.ToAddingFlashcard />
          <Nav.ToEditingFlashcard />
          <Nav.ToDeletingFlashcard />
          <Nav.SavingChanges />
        </Nav.Group>
      </div>
    </div>
  );
}
