import FlippingCard from "./Chapters/FlippingCard";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import { useStyles } from "./ShufflingFlashcardsStyle";
import { Drawer, Paper, Stack } from "@mui/material";
import { Nav } from "./Nav/Nav";
import React from "react";
import { useSelector } from "react-redux";

export default function ShufflingFlashcards() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  console.log(state);
  const isDrawerOpen = useSelector((state) => state.app.isDrawerOpen);
  console.log(state);

  const DecksStack = (
    <Stack spacing={2}>
      {state.app.decks.map((deck) => {
        return (
          <Paper key={deck?.title + "KEY"} className="DeckItem">
            {deck?.title}
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
        open={true}
        anchor="left"
        children={DecksStack}
      ></Drawer>
      <div className={classes.flashcardCell}>
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
