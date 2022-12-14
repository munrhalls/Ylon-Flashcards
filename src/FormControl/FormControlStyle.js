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
        gridTemplateColumns: "5% 90%",
        gridTemplateRows: "20% 75%",
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
      [themes.breakpoints.down("xs")]: {
        fontSize: "6",
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
      [themes.breakpoints.down("sm")]: {
        width: "100%",
        alignItems: "space-between",
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
      [themes.breakpoints.down("sm")]: {
        maxHeight: "70%",
        fontSize: "10",
      },
    },
    editFlashcardSubmitButtonContainer: {
      height: "100%",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      [themes.breakpoints.down("sm")]: {
        width: "30%",
      },
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
