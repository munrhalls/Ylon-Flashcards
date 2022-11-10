import { makeStyles } from "@material-ui/core/styles";

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
      [themes.breakpoints.down("sm")]: {
        gridTemplateColumns: "5% 90% 95%",
        gridTemplateRows: "25% 60% 95%",
      },
    },
    emptyMsg: {
      color: "#fff",
      margin: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    completedMsg: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      [themes.breakpoints.down("xs")]: {
        fontSize: ".75rem",
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
      borderRadius: "3px",
    },
    header: {
      height: "3rem",
      background: "#eaeaea",
      borderTopLeftRadius: "3px",
      borderTopRightRadius: "3px",
      width: "100%",
      position: "absolute",
      top: "-2.5rem",
      zIndex: "10",
      [themes.breakpoints.down("xs")]: {
        height: "2rem",
        top: "-1.25rem",
      },
    },
    linksCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "3",
      gridRowEnd: "3",
      minWidth: "0",
      "& .MuiButtonGroup-root": {
        width: "initial",
        display: "flex",
        maxHeight: "2rem",
      },
    },
  };
});
