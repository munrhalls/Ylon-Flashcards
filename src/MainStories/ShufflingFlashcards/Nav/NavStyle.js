import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@mui/material/colors";

export const useStyles = makeStyles((themes) => {
  return {
    btnGroup: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "nowrap",

      [themes.breakpoints.down("xs")]: {
        "& .MuiButtonBase-root": {
          minWidth: "0",
          maxWidth: "1.5rem",
          width: "1.5rem",
        },
        "& .MuiButton-startIcon": {
          margin: "0",
        },
      },
    },
    saveBtnActive: {
      background: `${blue[900]} !important `,
      backgroundColor: `${blue[900]} !important `,
      marginLeft: "auto",
    },
  };
});
