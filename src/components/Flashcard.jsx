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
      minHeight: "15rem",
      minWidth: "10rem",
      margin: "auto",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
      width: "100%",
    },
    btnColumn: {
      display: "flex",
      flexDirection: "column",
    },
  };
});

export default function Flashcard() {
  const classes = useStyles();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "25% 50% 75%",
        gridTemplateRows: "25% 50% 75%",
      }}
    >
      <div
        style={{
          gridColumnStart: "2",
          gridColumnEnd: "2",
          gridRowStart: "2",
          gridRowEnd: "2",
          background: "#000",
        }}
      >
        <Card className={classes.flashcard}>Flashcard</Card>
      </div>
    </div>
  );
}
