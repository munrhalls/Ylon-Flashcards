import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import StyleIcon from "@mui/icons-material/Style";
import FlippingCard from "./Chapters/FlippingCard";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";

import { useStyles } from "./ShufflingFlashcardsStyle";
import { useSelector } from "react-redux";
import { Nav } from "./Nav/Nav";
import React from "react";

export default function ShufflingFlashcards() {
  const classes = useStyles();
  const flashcards = useSelector((state) => state.currentDeck.flashcards);
  const isFlashcards = flashcards?.length;

  function handleNavToggle() {}
  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        {isFlashcards ? (
          <>
            <FlippingCard />
            <MarkingDifficultyLevel />
          </>
        ) : (
          <div className={classes.emptyMsg}>
            <h1>DECK IS EMPTY</h1>
            <Nav.ToAddingFlashcard text="Add flashcard" />
          </div>
        )}
      </div>
      <div className={classes.linksCell}>
        <Nav.Group>
          {isFlashcards ? (
            <>
              <Nav.ToAddingFlashcard />
              <Nav.ToEditingFlashcard />
              <Nav.ToDeletingFlashcard />
            </>
          ) : null}
          {/* <ToggleButtonGroup onChange={handleNavToggle}>
            <ToggleButton value={}>
              <ViewListIcon />
              </ToggleButton>
              <ToggleButton value={}>
              <StyleIcon />
              </ToggleButton>
              
            
          </ToggleButtonGroup> */}
          <Nav.SavingChanges />
        </Nav.Group>
      </div>
    </div>
  );
}
