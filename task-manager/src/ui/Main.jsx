import { useEffect, useRef, useState } from "react";
import TaskOperations from "../features/tasks/TaskOperations";
import Container from "./Container";
import TaskBox from "./TaskBox";
import TaskTable from "../features/tasks/TaskTable";
import TaskController from "../features/tasks/TaskController";
import { data } from "../data.js";

export default function Main() {
  const [tasks, setTasks] = useState(data);

  function handleAddTaskClick(task) {
    setTasks((cur) => [...cur, { ...task, time: 50 }]);
  }

  function handleTimer(id) {
    setTasks((cur) =>
      cur.map((el) => (el.id === id ? { ...el, time: el.time - 1 } : { ...el }))
    );
  }

  function handleTimeout(id) {
    console.log("timeout");

    setTasks((cur) =>
      cur.map((el) =>
        el.id === id ? { ...el, deleteDisabled: true } : { ...el }
      )
    );
  }

  return (
    <section class="mb-20" id="tasks">
      <Container>
        <TaskOperations />
        <TaskBox>
          <TaskController onAddTask={handleAddTaskClick} />
          <div class="overflow-auto">
            <TaskTable
              tasks={tasks}
              onUpdateTimer={handleTimer}
              onTimeout={handleTimeout}
            />
          </div>
        </TaskBox>
      </Container>
    </section>
  );
}
