import {
  Card,
  CardContent,
  Container,
  Typography,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import "./ToDoList.css";
import React from "react";

// Components
import ToDo from "../ToDo/ToDo";

// toDo's
import todos from "../../data/todo";

function ToDoList() {
  const todosJsx = todos.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        title={todo.title}
        description={todo.description}
        isCompleted={todo.isCompleted ?? false}
      />
    );
  });

  const [alignment, setAlignment] = React.useState("الكل");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      {/* <> is Equal to React.Fragment */}
      <Container maxWidth="sm">
        <Card sx={{ bgcolor: "#ececec", minWidth: 275, textAlign: "center" }}>
          <CardContent>
            {/* =====Title==== */}
            <Typography // Typography is a text component instead of h1, h2, h3, h4, h5, h6
              variant="h2"
              sx={{ fontWeight: "500" }}
            >
              مهامي
            </Typography>
            <Divider />
            {/* =====Title==== */}

            {/* =====ToggleButtons==== */}
            <ToggleButtonGroup
              className="toggleBtn"
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="غير منجز">غير منجز</ToggleButton>
              <ToggleButton value="منجز">منجز</ToggleButton>
              <ToggleButton value="الكل">الكل</ToggleButton>
            </ToggleButtonGroup>
            {/* =====ToggleButtons==== */}

            {/* ===ToDo's=== */}
            {todosJsx}
            {/* ===ToDo's=== */}

            {/* ===========Input + Add Button=========== */}
            <Grid container spacing={2}>
              <Grid size={8}>
                <TextField
                  className="txt-field"
                  id="outlined-basic"
                  label="اضافه مهمه"
                  variant="outlined"
                />
              </Grid>
              <Grid size={4}>
                <Button variant="contained" className="addBtn">
                  اضافه
                </Button>
              </Grid>
            </Grid>
            {/* ==========Input + Add Button=========== */}
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default ToDoList;
