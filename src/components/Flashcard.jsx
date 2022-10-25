import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grid } from "@mui/system";

const useStyles = makeStyles((themes) => {
  return {
    flashcard: {
      border: "1px solid #000",
      height: "100%",
      width: "70%",
    },
    container: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "25% 50% 75%",
      gridTemplateRows: "25% 50% 75%",
    },
    flashcardCell: {
      gridColumnStart: "2",
      gridColumnEnd: "2",
      gridRowStart: "2",
      gridRowEnd: "2",
      display: "flex",
      zIndex: "1",
    },
    buttonsCol: {
      height: "100%",
      width: "30%",
      zIndex: "2",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };
});

export default function Flashcard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.flashcardCell}>
        <Card className={classes.flashcard}>Flashcard</Card>
        <div className={classes.buttonsCol}>
          <Button>Hard</Button>
          <Button>Hard</Button>
          <Button>Hard</Button>
          <Button>Hard</Button>
        </div>
      </div>
    </div>
  );
}
