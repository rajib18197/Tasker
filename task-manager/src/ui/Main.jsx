import TaskOperations from "../features/tasks/TaskOperations";
import Container from "./Container";
import TaskBox from "./TaskBox";

export default function Main() {
  return (
    <section class="mb-20" id="tasks">
      <Container>
        <TaskOperations />
        <TaskBox />
      </Container>
    </section>
  );
}
