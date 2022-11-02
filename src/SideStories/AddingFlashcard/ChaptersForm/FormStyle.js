import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@mui/material/colors";

export const useStyles = makeStyles((themes) => {
  return {
    form: {
      display: "flex",
      alignItems: "center",
      height: "80%",
      width: "90%",

      cursor: "pointer",
      border: "1px solid #000",
      height: "95%",
      margin: "auto 2.5%",
      width: "55%",
      position: "absolute",
      left: "0",
    },
    outlinedInput: {
        
    }
  };
});
