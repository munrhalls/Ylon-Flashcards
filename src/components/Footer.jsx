import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Footer() {
  const Footer = styled(Grid)`
    background: #000;
    color: #fff;

    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Footnote = styled(Typography)`
    background: #000;
    color: #fff;
    font-weight: normal;
    letter-spacing: 1px;

    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Footer container>
      <Grid item>
        <Footnote variant="subtitle2">App by Munrhalls. 2022.</Footnote>
      </Grid>
    </Footer>
  );
}
