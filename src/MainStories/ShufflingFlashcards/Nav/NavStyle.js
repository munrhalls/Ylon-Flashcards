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
        "& .MuiButton-startIcon": {
          marginRight: "0",
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
