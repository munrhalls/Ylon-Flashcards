import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((themes) => {
  return {
    editBtnsCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "3",
      gridRowEnd: "3",
    },
  };
});
