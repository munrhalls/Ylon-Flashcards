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
    decksCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "2",
      gridRowEnd: "2",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      perspective: "1000px",
      position: "relative",
      zIndex: "1",
      backgroundColor: "#000",
    },
    decksHeader: {
      padding: ".5rem",
      display: "flex",
      justifyContent: "center",
      background: "#dadada",
      maxHeight: "4rem",
      width: "100%",
      flex: "1",
    },
    listContainer: {
      "&.MuiBox-root": {
        width: "90%",
        margin: "1rem",
        background: "#fff",
      },
    },
    listItem: {
      borderBottom: "1px solid #dadada",
    },
  };
});
