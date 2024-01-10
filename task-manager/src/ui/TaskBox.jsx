import TaskController from "../features/tasks/TaskController";
import TaskTable from "../features/tasks/TaskTable";

export default function TaskBox() {
  return (
    <div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
      <TaskController />

      <div class="overflow-auto">
        <TaskTable />
      </div>
    </div>
  );
}
