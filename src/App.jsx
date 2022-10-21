import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";

import Topbar from "./Topbar";
import Flashcard from "./components/Flashcard";
import DecksDashboard from "./components/DecksDashboard";
import Footer from "./components/Footer";

const useStyles = makeStyles({
  page: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

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
  );
}

export default App;
