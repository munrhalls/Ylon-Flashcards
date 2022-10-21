import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { black, white } from "@mui/material/colors";

import Topbar from "./Topbar";
import Flashcard from "./components/Flashcard";
import DecksDashboard from "./components/DecksDashboard";
import Footer from "./components/Footer";

function App() {
  const useStyles = makeStyles({
    page: {
      width: "100%",
    },
  });
  const classes = useStyles();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
      },
      secondary: {
        main: "#616161",
      },
    },
  });

  const Layout = styled(Grid)`
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `;

  const TwoColumns = styled(Grid)`
    margin-top: 64px;
    flex: 1;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Layout className={classes.page}>
        <Topbar />
        <TwoColumns container>
          <Grid item xs={3}>
            <DecksDashboard />
          </Grid>
          <Grid item xs={9} justify="center">
            <Flashcard />
          </Grid>
        </TwoColumns>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
