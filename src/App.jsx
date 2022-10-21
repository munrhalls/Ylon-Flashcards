import { Grid, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Topbar from "./Topbar";
import Flashcard from "./Flashcard";
import DecksDashboard from "./DecksDashboard";

function App() {
  const Layout = styled(Grid)`
    min-height: 100vh;
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
    <Layout>
      <Topbar />
      <TwoColumns container>
        <Grid item xs={3}>
          <DecksDashboard />
        </Grid>
        <Grid item xs={9} justify="center">
          <Flashcard />
        </Grid>
      </TwoColumns>
    </Layout>
  );
}

export default App;
