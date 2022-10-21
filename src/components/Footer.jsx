import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Footer() {
  const Footnote = styled(Typography)`
    font-weight: normal;
    letter-spacing: 1px;
  `;
  return (
    <Box
      sx={{
        height: "2rem",
        width: "100%",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      color="white"
    >
      <Footnote align="center" color="secondary" variant="subtitle2">
        App by Munrhalls. 2022.
      </Footnote>
    </Box>
  );
}
