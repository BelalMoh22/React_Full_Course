/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ToDo.css";

export default function ToDo({ title, description, isCompleted }) {
  return (
    <>
      <Card className="toDoCard">
        <CardContent>
          <Grid container spacing={2}>
            {/* =====Title==== */}
            <Grid size={8}>
              <Typography // Typography is a text component instead of h1, h2, h3, h4, h5, h6
                variant="h5"
                sx={{ textAlign: "right", fontWeight: "500" }}
              >
                {title}
              </Typography>
              <Divider />
              <Typography // Typography is a text component instead of h1, h2, h3, h4, h5, h6
                variant="h6"
                sx={{ textAlign: "right", fontWeight: "300" }}
              >
                {description}
              </Typography>
            </Grid>
            {/* =====Title==== */}

            {/* =====Action Buttons==== */}
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton aria-label="check" className="checkBtn">
                <CheckIcon />
              </IconButton>

              <IconButton aria-label="check" className="editBtn">
                <EditIcon />
              </IconButton>

              <IconButton aria-label="check" className="deleteBtn">
                <DeleteIcon />
              </IconButton>
            </Grid>
            {/* =====Buttons==== */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
