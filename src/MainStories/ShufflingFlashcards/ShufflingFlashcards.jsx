import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import StyleIcon from "@mui/icons-material/Style";
import FlippingCard from "./Chapters/FlippingCard";
import MarkingDifficultyLevel from "./Chapters/MarkingLevel";
import CardHeader from "@mui/material/CardHeader";
import { Drawer } from "@mui/material";
import { setCurrentDeck } from "../../store/store";

import { useStyles } from "./ShufflingFlashcardsStyle";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "./Nav/Nav";
import React from "react";

export default function ShufflingFlashcards() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentDeck = useSelector((state) => state.currentDeck);
  const decksList = useSelector((state) => state.app.decks);

  const isFlashcards = currentDeck?.flashcards?.length;

  function initializeCurrentDeck() {
    if (!currentDeck) {
      dispatch(setCurrentDeck(decksList[0]));
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
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
          <div className={classes.emptyMsg}>
            <h1>DECK IS EMPTY</h1>
            <Nav.ToAddingFlashcard text="Add flashcard" />
          </div>
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
