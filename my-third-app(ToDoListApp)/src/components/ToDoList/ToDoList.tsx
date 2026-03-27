/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useState, useContext, useEffect } from "react";

// Components
import ToDo from "../ToDo/ToDo";

// other
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../../contexts/TodosContext";

function ToDoList() {
  const [titleInput, setTitleInput] = useState("");
  const [{ todosList, setTodosList }] = useContext(TodosContext);

  const handleAddClick = () => {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      description: `هذا وصف لمهمه ${titleInput}`,
      isCompleted: false,
    };

    if (titleInput.trim() === "") {
      return;
    }

    const newTodosList = [...todosList, newTodo];
    setTodosList(newTodosList);
    // Save to local storage
    localStorage.setItem("todos", JSON.stringify(newTodosList));
    setTitleInput(""); // to clear the input field
  };
  // =====================UseEffect Hook===================

  // useEffect(() => {
  //   console.log("UseEffect Hook");
  // }); // this will run once when the component renders and it has two parameters, the first is the function and the second is the array of dependencies where the function will run again

  //   useEffect(() => {
  //   console.log("UseEffect Hook (title input)");
  // } , [titleInput]); // this will run when the titleInput changes

  //     useEffect(() => {
  //   console.log("UseEffect Hook (todosList)");
  // } , [todosList]); // this will run when the todosList changes

  // useEffect(() => {
  //   console.log("UseEffect Hook (one time)");
  // }, []); // this will run once when the component renders

  // =====================UseEffect Hook===================

  // Retrieve data from local storage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodosList(parsedTodos);
    }
  }, []);

  // =====================ToggleButtons===================
  const [displayedTodos, setDisplayedTodos] = React.useState("all");

  const handleChange = (e, value) => {
    if (value !== null) {
      setDisplayedTodos(value);
    }
  };

  // ===================== Update toggle button===================
  const filteredTodos = todosList.filter((t) => {
    if (displayedTodos === "completed") return t.isCompleted;
    if (displayedTodos === "notCompleted") return !t.isCompleted;
    return true;
  });

  const todosJsx = filteredTodos.map((t) => {
    return <ToDo key={t.id} todo={t} />;
  });
  // =====================Update toggle button===================
  // =====================ToggleButtons===================

  return (
    <React.Fragment>
      {/* <> is Equal to React.Fragment */}
      <Container maxWidth="sm">
        <Card
          sx={{
            bgcolor: "#ececec",
            minWidth: 275,
            textAlign: "center",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
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
              value={displayedTodos}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="notCompleted">غير منجز</ToggleButton>
              <ToggleButton value="completed">منجز</ToggleButton>
              <ToggleButton value="all">الكل</ToggleButton>
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
                  color="primary"
                  className="addBtn"
                  onClick={handleAddClick}
                  disabled={titleInput.trim() === "" ? true : false}
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
