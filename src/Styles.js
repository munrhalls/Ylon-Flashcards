import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flashcard: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    border: "1px solid #000",
  },
  icon: {},
}));

export default useStyles;
