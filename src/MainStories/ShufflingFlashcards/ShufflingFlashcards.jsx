import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import StyleIcon from "@mui/icons-material/Style";
import FlippingCard from "./Chapters/FlippingCard";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import CardHeader from "@mui/material/CardHeader";
import { Drawer } from "@mui/material";
import { red, orange, blue } from "@mui/material/colors";
import { setCurrentDeck } from "../../store/store";

import { useStyles } from "./ShufflingFlashcardsStyle";
import { useSelector } from "react-redux";
import { Nav } from "./Nav/Nav";
import React from "react";

export default function ShufflingFlashcards() {
  const classes = useStyles();
  const currentDeck = useSelector((state) => state.currentDeck.currentDeck);
  const decksList = useSelector((state) => state.app.decks);

  const isFlashcards = currentDeck?.flashcards?.length;

  const bgColors = {
    hard: red[900],
    medium: orange[900],
    easy: blue[900],
  };

  const currentFlashcard = currentDeck?.flashcards[0];
  const bg = {
    backgroundColor: currentFlashcard?.level
      ? bgColors[currentFlashcard?.level]
      : "#000",
  };

  function getCompletedOrEmpty() {
    if (currentDeck?.completedFlashcards?.length) return getCompletedMessage();
    return getEmptyMessage();
  }

  function getEmptyMessage() {
    return (
      <div className={classes.emptyMsg}>
        <h1>DECK IS EMPTY</h1>
        <Nav.ToAddingFlashcard text="Add flashcard" />
      </div>
    );
  }

  function getCompletedMessage() {
    return (
      <div className={classes.completedMsg}>
        <h2>CONGRATULATIONS!</h2>
        <h3> DECK COMPLETED!</h3>
        <Nav.ToRestartingDeck text="Restart" />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell} style={bg}>
        <CardHeader className={classes.header} title={currentDeck?.title}>
          <Drawer anchor="top" open={true}>
            {decksList.map((deck) => {
              return <h1 key={deck?.title}>{deck?.title}</h1>;
            })}
          </Drawer>
        </CardHeader>
        {isFlashcards ? (
          <>
            <FlippingCard />
            <MarkingDifficultyLevel />
          </>
        ) : (
          getCompletedOrEmpty()
        )}
      </div>
      <div className={classes.linksCell}>
        <Nav.Group>
          {isFlashcards ? <Nav.ToAddingFlashcard /> : null}
          {isFlashcards ? <Nav.ToEditingFlashcard /> : null}
          {isFlashcards ? <Nav.ToDeletingFlashcard /> : null}
          <Nav.SavingChanges />
        </Nav.Group>

        {/* <ToggleButtonGroup onChange={handleNavToggle}>
            <ToggleButton value={}>
              <ViewListIcon />
              </ToggleButton>
              <ToggleButton value={}>
              <StyleIcon />
              </ToggleButton>
              
            
          </ToggleButtonGroup> */}
      </div>
    </div>
  );
}
