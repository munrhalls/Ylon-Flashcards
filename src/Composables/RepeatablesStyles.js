import {
  blue,
  green,
  grey,
  orange,
  purple,
  red,
  yellow,
} from "@mui/material/colors";

import { makeStyles } from "@material-ui/core/styles";

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
      background: `${blue[900]} !important `,
      backgroundColor: `${blue[900]} !important `,
    },
    saveBtnActive: {
      width: "100%",
      background: `${blue[900]} !important `,
      backgroundColor: `${blue[900]} !important `,
    },
  };
});
