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
    editBtnsCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "3",
      gridRowEnd: "3",
      minWidth: "0",
    },
    buttonGroupsWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap",
    },
    btnGroup2: {
      marginLeft: "auto",
    },
    saveBtnActive: {
      width: "100%",
      background: orange[900],
    },
  };
});
