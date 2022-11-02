import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((themes) => {
  return {
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    text: {
      marginRight: "1rem",
    },
    icon: {},
  };
});
