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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./ToDoList.css";
import React, {
  useState,
  //useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

// Components
import ToDo from "../ToDo/ToDo";

// other
// import { v4 as uuidv4 } from "uuid";
//import { TodosContext } from "../../contexts/TodosContext";
import { useToast } from "../../Hooks/useToast";
// import { useSnackbar } from "notistack";
// import { showSnackbar } from "../../utils/snackbar";

// useReducer
import todosReducer from "../../Reducers/todosReducer";
//import todos from "../../data/todo";

function ToDoList() {
  // ======================snackbar========================
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  //=====================snackbar========================

  // =================== without UseReducer Hook===================
  //const [{ todosList, setTodosList }] = useContext(TodosContext);
  // =================== without UseReducer Hook===================

  // =================== Toast =====================
  const toast = useToast();
  // ================== Toast=====================

  const [titleInput, setTitleInput] = useState("");

  // ===================== UseReducer Hook===================
  const [todosState, dispatch] = useReducer(todosReducer, []);
  // ===================== UseReducer Hook===================

  const handleAddClick = () => {
    // ============== without UseReducer Hook===================
    // const newTodo = {
    //   id: uuidv4(),
    //   title: titleInput,
    //   description: `هذا وصف لمهمه ${titleInput}`,
    //   isCompleted: false,
    // };

    // if (titleInput.trim() === "") {
    //   return;
    // }

    // const newTodosList = [...todosList, newTodo];
    // setTodosList(newTodosList);
    // // Save to local storage
    // localStorage.setItem("todos", JSON.stringify(newTodosList));
    // ================= without UseReducer Hook===================

    // =============== with UseReducer Hook===================
    dispatch({
      type: "add", // type : the type of the action
      payload: { title: titleInput }, // payload : additional data that we want to send with the action
    });
    // =============== with UseReducer Hook===================

    setTitleInput(""); // to clear the input field
    toast.showHideToast("تم اضافه المهمه بنجاح");
    // showSnackbar(
    //   enqueueSnackbar,
    //   closeSnackbar,
    //   "تم اضافه المهمه بنجاح",
    //   "success",
    // );
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
    // ===================== without UseReducer Hook===================
    // const storedTodos = localStorage.getItem("todos");

    // if (storedTodos) {
    //   const parsedTodos = JSON.parse(storedTodos);
    //   setTodosList(parsedTodos);
    // }
    // ===================== without UseReducer Hook===================

    // ===================== with UseReducer Hook===================
    dispatch({
      type: "init",
    });
    // ===================== with UseReducer Hook===================
  }, []); // this will run once when the component renders

  // =====================ToggleButtons===================
  const [displayedTodos, setDisplayedTodos] = useState("all");

  const handleChange = (_e, value) => {
    if (value !== null) {
      setDisplayedTodos(value);
    }
  };

  // ===================== Update toggle button===================
  // useMemo is a React Hook that lets you memoize the result of a function.
  const filteredTodos = useMemo(() => {
    return todosState.filter((t) => {
      console.log("useMemo called");
      if (displayedTodos === "completed") return t.isCompleted;
      if (displayedTodos === "notCompleted") return !t.isCompleted;
      return true;
    });
  }, [todosState, displayedTodos]); // here the useMemo will run again when the todosList or displayedTodos changes
  // =====================Update toggle button===================
  // =====================ToggleButtons===================

  // ===================== Edit Dialog====================

  // passing this Function as a prop to ToDo component to open the Delete Dialog and pass the todo object to it
  const [todoDialog, setTodoDialog] = useState(null); // here we can't make it as a variable because it will render again and again so it will also be null
  const [showEditDialog, setShowEditDialog] = useState(false);

  const openUpdateDialog = (todo) => {
    setShowEditDialog(true);
    setTodoDialog(todo);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  function handleEdit() {
    // ============= without UseReducer Hook===================
    // const updatedTodos = todosState.map((t) => {
    //   if (t.id === todoDialog.id) {
    //     return {
    //       ...t,
    //       title: todoDialog.title,
    //       description: todoDialog.description,
    //     };
    //   }
    //   return t;
    // });
    // //setTodosList(updatedTodos);
    // // Save to local storage
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
    // ================= without UseReducer Hook===================

    // ============== with UseReducer Hook===================
    dispatch({
      type: "edit",
      payload: {
        id: todoDialog.id,
        title: todoDialog.title,
        description: todoDialog.description,
      },
    });
    // ================= with UseReducer Hook===================
    closeEditDialog();
    toast.showHideToast("تم تعديل المهمه");

    // showSnackbar(enqueueSnackbar, closeSnackbar, "تم تعديل المهمه", "info");
  }
  // ===================== Edit Dialog====================

  // =====================Delete Dialog====================
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const handleOpenDeleteDialog = (todo) => {
    // alert(todo.title);
    setShowDeleteDialog(true);
    setTodoDialog(todo);
  };

  const handleDelete = () => {
    // =========== without UseReducer Hook===================
    // const newTodosList = todosState.filter((t) => todoDialog.id !== t.id);
    // //setTodosList(newTodosList);
    // // Save to local storage
    // localStorage.setItem("todos", JSON.stringify(newTodosList));
    // ================== without UseReducer Hook===================

    // =============== with UseReducer Hook===================
    dispatch({
      type: "delete",
      payload: todoDialog,
    });
    // ================ with UseReducer Hook===================
    handleCloseDeleteDialog();
    toast.showHideToast("تم حذف المهمه بنجاح");

    //showSnackbar(enqueueSnackbar, closeSnackbar, "تم الحذف", "error");
  };
  // =====================Delete Dialog====================

  // ============ Show ToDo's======================
  const todosJsx = filteredTodos.map((t) => {
    return (
      <ToDo
        key={t.id}
        todo={t}
        openDeleteDialog={handleOpenDeleteDialog}
        openUpdateDialog={openUpdateDialog}
      />
    );
  });
  // =========== Show ToDo's======================

  return (
    <React.Fragment>
      {" "}
      {/* <> is Equal to React.Fragment */}
      {/* ============= Edit Dialog=========== */}
      <Dialog open={showEditDialog} onClose={closeEditDialog}>
        <DialogContent>
          <DialogContentText>تعديل المهمه</DialogContentText>
          <form
            id="edit-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextField
              autoFocus
              required
              label="تعديل عنوان المهمه"
              type="text"
              fullWidth
              variant="standard"
              // Then React renders the component BEFORE you open the dialog so when you type todoDialog.title it will be undefined so this is the solution {todoDialog?.title || ""}
              value={todoDialog?.title || ""}
              onChange={(e) => {
                setTodoDialog({
                  ...todoDialog,
                  title: e.target.value,
                });
              }}
            />

            <TextField
              label="تعديل تفاصيل المهمه"
              type="text"
              fullWidth
              variant="standard"
              value={todoDialog?.description || ""}
              onChange={(e) => {
                setTodoDialog({
                  ...todoDialog,
                  description: e.target.value,
                });
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog}>اغلاق</Button>
          <Button
            type="submit"
            form="edit-form"
            onClick={() => {
              handleEdit();
            }}
          >
            حفظ التعديلات
          </Button>
        </DialogActions>
      </Dialog>
      {/* =================Edit Dialog===================== */}
      {/*============= Delete Dialog=========== */}
      <Dialog
        open={showDeleteDialog}
        onClose={handleCloseDeleteDialog} // here Closing Dialog when click on anyWhere of the page
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل انت متاكد من الحذف ؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكن التراجع عن الحذف بعد اتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>اغلاق</Button>
          <Button onClick={handleDelete} autoFocus>
            نعم قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/*============= Delete Dialog=========== */}
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
