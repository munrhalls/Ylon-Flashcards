import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@mui/material/colors";

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
    editFlashcardSubmitButtonContainer: {
      height: "100%",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
    editFlashcardSubmitButton: {
      backgroundColor: "#fff",
      zIndex: "10",
      height: "25%",
      width: "75%",
      backgroundColor: green[700],
      "&:hover": {
        backgroundColor: green[900],
      },
    },
    editFlashcardDiscardButton: {
      backgroundColor: "#fff",
      zIndex: "10",
      height: "25%",
      width: "75%",
      backgroundColor: red[700],
      "&:hover": {
        backgroundColor: red[900],
      },
    },
  };
});
