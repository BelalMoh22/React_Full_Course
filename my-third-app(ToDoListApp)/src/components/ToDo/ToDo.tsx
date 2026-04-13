import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import "./ToDo.css";

// Context
import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { ToastContext } from "../../contexts/ToastContext";
// import { useSnackbar } from "notistack";
// import { showSnackbar } from "../../utils/snackbar";

export default function ToDo({ todo, openDeleteDialog, openUpdateDialog }) {
  //=========================snackbar======================
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // ====================snackbar==========================

  const [{ todosList, setTodosList }] = useContext(TodosContext);

  // =====================toast========================
  const toast = useContext(ToastContext);
  // =====================toast========================

  const handleCheckClick = () => {
    const newTodosList = todosList.map((t) => {
      if (t.id === todo.id) {
        // if (t.isCompleted === false) {
        //   t.isCompleted = true;
        // } else {
        //   t.isCompleted = false;
        // }
        // or
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTodosList(newTodosList);
    localStorage.setItem("todos", JSON.stringify(newTodosList));

    toast.showHideToast(
      todo.isCompleted ? "عدم انهاء المهمه" : "تم انهاء المهمه",
    );

    //   showSnackbar(
    //     enqueueSnackbar,
    //     closeSnackbar,
    //     todo.isCompleted ? "عدم انهاء المهمه" : "تم انهاء المهمه",
    //     "success",
    //   );
  };
  //======================================================
  // Edit Dialog
  const showUpdateDialog = () => {
    openUpdateDialog(todo);
  };
  // Delete Dialog
  const showDeleteDialog = () => {
    openDeleteDialog(todo);
  };
  //=============================================================================
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
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
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
                onClick={showUpdateDialog}
              >
                <EditIcon />
              </IconButton>
              {/* =========== Edit Icon Button=========== */}

              {/* =====Delete Icon Button==== */}
              <IconButton
                aria-label="check"
                className="deleteBtn"
                onClick={showDeleteDialog}
              >
                <DeleteIcon />
              </IconButton>
              {/* =====Delete Icon Button==== */}
            </Grid>
            {/* =====Buttons==== */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
