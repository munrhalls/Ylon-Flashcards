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
      gridTemplateColumns: "15% 50% 85%",
      gridTemplateRows: "15% 65% 85%",
      [themes.breakpoints.down("md")]: {
        gridTemplateColumns: "15% 70% 85%",
        gridTemplateRows: "15% 70% 85%",
      },
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
  };
});
