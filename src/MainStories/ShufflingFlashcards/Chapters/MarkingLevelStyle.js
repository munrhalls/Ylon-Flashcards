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
    btn: {
      padding: "0",
      flex: "1",
      minWidth: "0",
      width: "40%",
      margin: "2.5% 0",
      "& .MuiButton-label": {
        display: "flex",
        flexDirection: "column",
      },
      "& .MuiSvgIcon-root": {
        width: "2em",
        fontSize: "1.5rem",
        [themes.breakpoints.down("sm")]: {
          maxWidth: "40%",
          fontSize: "12px",
        },
      },
    },
    next: {
      "&.MuiSvgIcon-root": {
        maxHeight: "2rem",
        width: "4rem",
        fontSize: "4rem",
        [themes.breakpoints.down("xs")]: {
          maxWidth: "40%",
          width: "4rem",
          fontSize: "4rem",
        },
      },
    },
  };
});
