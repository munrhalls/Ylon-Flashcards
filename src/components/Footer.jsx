import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Footer() {
  const Footer = styled(Grid)`
    background: #000;git
    color: #fff;
    margin-top: 1rem;
  `;
  const Footnote = styled(Typography)`
    font-weight: normal;
    letter-spacing: 1px;
  `;
  return (
    <Box
      sx={{
        width: "100%",
        background: "#000",
      }}
      bgColor="text-secondary"
      color="white"
    >
      <Container justify="center" maxWidth="lg">
        <Footnote align="center" color="primary" variant="subtitle2">
          App by Munrhalls. 2022.
        </Footnote>
      </Container>
    </Box>
  );
}
