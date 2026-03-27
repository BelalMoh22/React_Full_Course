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
import React, { useState , useContext } from "react";

// Components
import ToDo from "../ToDo/ToDo";

// other
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../../contexts/todosContext";

function ToDoList() {
  const [titleInput, setTitleInput] = useState("");
  const [{ todosList, setTodosList }] = useContext(TodosContext);

  const todosJsx = todosList.map((t) => {
    return <ToDo key={t.id} todo={t} />;
  });

  const handleAddClick = () => {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      description: `هذا وصف لمهمه ${titleInput}`,
      isCompleted: false,
    };
    setTodosList([...todosList, newTodo]);
    setTitleInput(""); // to clear the input field
  };

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
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                />
              </Grid>
              <Grid size={4}>
                <Button
                  variant="contained"
                  className="addBtn"
                  onClick={handleAddClick}
                >
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
