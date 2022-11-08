// import React from "react";
// import FlashcardEditBtns from "../FlashcardEditBtns/FlashcardEditBtns";
// import DifficultyBtns from "../DifficultyBtns/DifficultyBtns";
// import { Card } from "@material-ui/core";
// import { useStyles } from "./FlashcardStyles";
// import { useSelector, useDispatch } from "react-redux";
// import { flip } from "../store/store";

// export default function Flashcard() {
//   const dispatch = useDispatch();

//   const state = useSelector((state) => state);
//   console.log(state.currentDeck.currentDeck.flashcards);
//   const currFlashcard = useSelector((state) => state.currentDeck.currentDeck.flashcards[0]);
//   const classes = useStyles();

//   const flipped = useSelector((state) => state.flipped);
//   const frontFlip = {
//     backfaceVisibility: "hidden",
//     transition: "transform 1s ease",
//     transform: `rotateY(${flipped ? "0.5" : "0"}turn)`,
//   };
//   const backFlip = {
//     backfaceVisibility: "hidden",
//     transition: "transform 1s ease",
//     transform: `rotateY(${flipped ? "0" : "-0.5"}turn)`,
//   };

//   return (
//     <div className={classes.container}>
//       <div className={classes.flashcardCell}>
//         <Card
//           variant="elevation"
//           onClick={() => dispatch(flip(flipped))}
//           className={classes.flashcard}
//           style={frontFlip}
//         >
//           {currFlashcard.question}
//         </Card>

//         <Card
//           variant="elevation"
//           onClick={() => dispatch(flip(flipped))}
//           className={classes.flashcard}
//           style={backFlip}
//         >
//           {currFlashcard.answer}
//         </Card>

//         <DifficultyBtns />
//       </div>
//       <FlashcardEditBtns currFlashcard={currFlashcard} />
//     </div>
//   );
// }
