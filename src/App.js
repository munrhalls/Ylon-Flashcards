import "./App.css";
import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";
import Flashcard from "./Flashcard";

function App() {
  const App = styled.div`
    display: grid;
    height: 100vh;
  `;

  const Header = styled.header`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  const Main = styled.main`
    height: 80%;
  `;
  const Footer = styled.footer`
    padding: 32px;
    background-color: blue;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  return (
    <App>
      <CssBaseline>
        <Header>Ylon flashcards</Header>
        <Main>
          <Flashcard />
        </Main>
        <Footer>Footer</Footer>
      </CssBaseline>
    </App>
  );
}

export default App;
