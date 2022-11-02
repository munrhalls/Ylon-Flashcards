import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@mui/material/colors";

export const useStyles = makeStyles((themes) => {
  return {
    NavLinksCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "3",
      gridRowEnd: "3",
      minWidth: "0",
    },
    btnGroup: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "nowrap",
    },
    saveBtnActive: {
      background: `${blue[900]} !important `,
      backgroundColor: `${blue[900]} !important `,
      marginLeft: "auto",
    },
  };
});
