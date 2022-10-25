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
    difficultyButtons: {
      height: "95%",
      width: "35%",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
      width: "80%",
      margin: "2.5% 0",
      [themes.breakpoints.down("xs")]: {
        maxWidth: "80%",
        fontSize: "12px",
      },
    },
    medium: {
      backgroundColor: orange[900],
      flex: "1",
      width: "80%",
      margin: "2.5% 0",
      [themes.breakpoints.down("xs")]: {
        maxWidth: "80%",
        fontSize: "12px",
      },
    },
    easy: {
      backgroundColor: blue[900],
      flex: "1",
      width: "80%",
      margin: "2.5% 0",
      [themes.breakpoints.down("xs")]: {
        maxWidth: "80%",
        fontSize: "12px",
      },
    },
    pass: {
      backgroundColor: green[900],
      flex: "1",
      width: "80%",
      margin: "2.5% 0",
      [themes.breakpoints.down("xs")]: {
        maxWidth: "80%",
        fontSize: "12px",
      },
    },
  };
});
