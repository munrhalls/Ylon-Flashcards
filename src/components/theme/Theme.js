import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
