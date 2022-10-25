import { makeStyles } from "@material-ui/core/styles";
import {
  purple,
  blue,
  green,
  orange,
  red,
  yellow,
  grey,
} from "@mui/material/colors";

export const useStyles = makeStyles((themes) => {
  return {
    container: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "15% 75% 90%",
      gridTemplateRows: "15% 75% 90%",
    },
    flashcardCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "2",
      gridRowEnd: "2",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      perspective: "1000px",
      position: "relative",
      zIndex: "1",
      backgroundColor: "#000",
    },
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
    difficultyButtons: {
      height: "95%",
      width: "35%",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "space-between",

      position: "absolute",
      margin: "auto 0",
      top: "2.5%",
      bottom: "2.5%",
      right: "2.5%",
    },
    hard: {
      backgroundColor: red[900],
      flex: "1",
      margin: "2.5% 0",
    },
    medium: {
      backgroundColor: orange[900],
      flex: "1",
      margin: "2.5% 0",
    },
    easy: {
      backgroundColor: blue[900],
      flex: "1",
      margin: "2.5% 0",
    },
    pass: {
      backgroundColor: green[900],
      flex: "1",
      margin: "2.5% 0",
    },
  };
});
