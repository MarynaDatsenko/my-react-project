import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";

import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { selectIsLoading, selectError } from "../../redux/tasksSlice";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
}
