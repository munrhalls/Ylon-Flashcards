import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((themes) => {
  return {
    flashcard: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "85%",
      margin: "auto 2.5%",
      width: "50%",
      position: "absolute",
      left: "0",
      backgroundColor: "#fff",
    },
    flashcardFlipped: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "85%",
      width: "50%",
      webkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
      backgroundColor: "#a0a0a0",
    },
  };
});
