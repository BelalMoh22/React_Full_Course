import { Button, Checkbox, Container, Slider, Stack } from "@mui/material";
// import '@mui/icons-material'
export default function Buttons() {
  /* MUI Material UI */

  return (
    <>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} style={{ backgroundColor: "grey" }}>
          <Button color="primary" size="small">
            Primary
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Secondary
          </Button>
          <Button variant="contained" color="success" size="medium">
            Success
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={() => {
              alert("Error");
            }}
          >
            Error
          </Button>

          {/* Checkbox  */}
          <div>
            <Checkbox defaultChecked />
            <Checkbox />
            <Checkbox disabled />
            <Checkbox disabled checked />
          </div>

          {/* Slider */}
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />

          {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button> */}
        </Stack>
      </Container>
    </>
  );
}
