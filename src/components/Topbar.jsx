import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Topbar() {
  const Topbar = styled(AppBar)`
    background-color: #fff;
  `;

  return (
    <Topbar>
      <Toolbar>
        <Typography color="primary" variant="h6">
          Ylon Flashcards
        </Typography>
      </Toolbar>
    </Topbar>
  );
}
