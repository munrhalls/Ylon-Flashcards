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
    flashcardCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "2",
      gridRowEnd: "2",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      perspective: "1000px",
      position: "relative",
      zIndex: "1",
      backgroundColor: "#000",
    },
    editFlashcardContainer: {
      display: "flex",
      alignItems: "center",
      zIndex: "10",
      height: "90%",
      width: "60%",
      marginLeft: "2.5%",
      [themes.breakpoints.down("xs")]: {
        width: "90%",
      },
      backgroundColor: "#fff",
      left: "0",
    },
    editFlashcardForm: {
      display: "flex",
      alignItems: "center",
      height: "90%",
      width: "90%",
    },
    editFlashcardInput: {
      height: "90%",
      width: "90%",
    },
  };
});
