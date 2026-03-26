import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function GridSystem() {
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
      <Grid size={2}>
        <Item>size=2</Item>
      </Grid>
      <Grid size={2}>
        <Item>size=2</Item>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={8}>
        <Item>size=8</Item>
      </Grid>
    </Grid>
  );
}
