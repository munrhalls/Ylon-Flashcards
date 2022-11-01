import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((themes) => {
  return {
    flashcard: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "95%",
      margin: "auto 2.5%",
      width: "55%",
      position: "absolute",
      left: "0",
    },
    flashcardFlipped: {
      cursor: "pointer",
      border: "1px solid #000",
      height: "100%",
      width: "60%",
      webkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    },
  };
});
