import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((themes) => {
  return {
    drawerControl: {
      //   height: "100%",
      //   width: "100%",
      //   display: "grid",
      //   gridTemplateColumns: "15% 50% 85%",
      //   gridTemplateRows: "15% 65% 85%",
      //   [themes.breakpoints.down("md")]: {
      //     gridTemplateColumns: "15% 70% 85%",
      //     gridTemplateRows: "15% 70% 85%",
      //   },
      //   [themes.breakpoints.down("sm")]: {
      //     gridTemplateColumns: "5% 90% 95%",
      //     gridTemplateRows: "15% 70% 95%",
      //   },
    },
    drawer: {
      "& .MuiPaper-root": {
        right: "30%",
        background: "#000",
        padding: ".5rem",

        "& .DecksStack": {
          "& .DeckItem": {
            background: "#fff",

            maxWidth: "90%",
            minWidth: "90%",
            padding: "1rem",
            cursor: "pointer",
            color: "#000",
            textOverflow: "hidden",
            whitespace: "nowrap",
            "& Button": {
              color: "#000",
            },
          },
        },
      },
    },
  };
});
