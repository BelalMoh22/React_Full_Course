/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import "./ToDo.css";

// Context
import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";

export default function ToDo({ todo }) {
  const [{ todosList, setTodosList }] = useContext(TodosContext);

  const handleCheckClick = () => {
    const newTodosList = todosList.map((t) => {
      if (t.id === todo.id) {
        // if (t.isCompleted === false) {
        //   t.isCompleted = true;
        // } else {
        //   t.isCompleted = false;
        // }
        // or
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodosList(newTodosList);
    // Save to local storage
    localStorage.setItem("todos", JSON.stringify(newTodosList));
  };

  // Delete Dialog
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleOpenDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const handleDelete = (id) => {
    const newTodosList = todosList.filter((t) => id !== t.id);
    setTodosList(newTodosList);
    // Save to local storage
    localStorage.setItem("todos", JSON.stringify(newTodosList));
  };

  const [showEditDialog, setShowEditDialog] = useState(false);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const [editedTodo, setEditedTodo] = useState({
    title: todo.title,
    description: todo.description,
  });

  function handleEdit(id) {
    const updatedTodos = todosList.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          title: editedTodo.title,
          description: editedTodo.description,
        };
      }
      return t;
    });
    setTodosList(updatedTodos);
    closeEditDialog();
    // Save to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

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
                style={{ textDecoration: todo.isCompleted ? "line-through" : "none"}}
              >
                {todo.title}
              </Typography>
              <Divider />
              <Typography // Typography is a text component instead of h1, h2, h3, h4, h5, h6
                variant="h6"
                sx={{ textAlign: "right", fontWeight: "300" }}
              >
                {todo.description}
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
              {/* =====Check Icon Button==== */}
              <IconButton
                aria-label="check"
                className="checkBtn"
                onClick={handleCheckClick}
                style={{
                  backgroundColor: todo.isCompleted ? "#8bc34a" : "white",
                  color: todo.isCompleted ? "white" : "#8bc34a",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* =====Check Icon Button==== */}

              {/* ============ Edit Icon Button=========== */}
              <IconButton
                aria-label="check"
                className="editBtn"
                onClick={openEditDialog}
              >
                <EditIcon />
              </IconButton>
              {/* =========== Edit Icon Button=========== */}

              {/* ============= Edit Dialog=========== */}
              <Dialog open={showEditDialog} onClose={closeEditDialog}>
                <DialogTitle>Subscribe</DialogTitle>
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
                      value={editedTodo.title}
                      onChange={(e) => {
                        setEditedTodo({
                          ...editedTodo,
                          title: e.target.value,
                        });
                      }}
                    />

                    <TextField
                      label="تعديل تفاصيل المهمه"
                      type="text"
                      fullWidth
                      variant="standard"
                      value={editedTodo.description}
                      onChange={(e) => {
                        setEditedTodo({
                          ...editedTodo,
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
                      handleEdit(todo.id);
                    }}
                  >
                    حفظ التعديلات
                  </Button>
                </DialogActions>
              </Dialog>
              {/* =================Edit Dialog===================== */}

              {/* =====Delete Icon Button==== */}
              <IconButton
                aria-label="check"
                className="deleteBtn"
                onClick={handleOpenDeleteDialog}
              >
                <DeleteIcon />
              </IconButton>
              {/* =====Delete Icon Button==== */}

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
                  <Button onClick={() => handleDelete(todo.id)} autoFocus>
                    نعم قم بالحذف
                  </Button>
                </DialogActions>
              </Dialog>
              {/*============= Delete Dialog=========== */}
            </Grid>
            {/* =====Buttons==== */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
