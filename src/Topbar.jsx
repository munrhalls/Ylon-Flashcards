import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

export default function Topbar() {
  const Topbar = styled(AppBar)`
    background-color: #fff;
  `;
  return (
    <Topbar>
      <Toolbar>
        <IconButton color="primary">
          <MenuIcon />
        </IconButton>
        <Typography color="primary" variant="h6">
          Ylon Flashcards
        </Typography>
      </Toolbar>
    </Topbar>
  );
}
