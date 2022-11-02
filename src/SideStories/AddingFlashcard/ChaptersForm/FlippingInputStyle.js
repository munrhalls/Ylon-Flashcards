import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles((themes) => {
  return {
    form: {
      display: "flex",
      alignItems: "center",
      height: "80%",
      maxHeight: "90%",
      width: "90%",
      cursor: "pointer",
      border: "1px solid #000",
      margin: "auto 2.5%",
      width: "100%",
      position: "absolute",
      left: "0",
      [themes.breakpoints.down("sm")]: {},
    },
    outlinedInput: {
      height: "100%",
      width: "100%",
    },
  };
});
