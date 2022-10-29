import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    status: {
      danger: "#e53e3e",
      warning: orange[900],
    },
  },
  overrides: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "green",
        },
      },
    },
  },
});
