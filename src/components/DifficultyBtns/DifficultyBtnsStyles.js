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
