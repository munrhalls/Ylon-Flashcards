import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles((themes) => {
  return {
    container: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "15% 50% 85%",
      gridTemplateRows: "15% 65% 85%",
      [themes.breakpoints.down("sm")]: {
        justifyItems: "stretch",
        alignItems: "stretch",
        gridTemplateColumns: "2.5% 97.5%",
        gridTemplateRows: "2.5% 97.5%",
      },
    },
    flashcardCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "2",
      gridRowEnd: "2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      perspective: "1000px",
      position: "relative",
      zIndex: "1",
      backgroundColor: "#000",
      [themes.breakpoints.down("sm")]: {
        gridColumnStart: "2",
        gridColumnEnd: "3",
        gridRowStart: "2",
        gridRowEnd: "3",
      },
    },
    editFlashcardTitle: {
      [themes.breakpoints.down("sm")]: {
        fontSize: "5",
      },
    },
    editFlashcardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "10",
      height: "90%",
      width: "60%",
      marginLeft: "2.5%",
      backgroundColor: "#fff",
      left: "0",
      paddingTop: "10px",
      paddingBottom: "10px",
      [themes.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    editFlashcardForm: {
      display: "flex",
      alignItems: "center",
      height: "80%",
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
