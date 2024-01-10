import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateUpdateTask from "./CreateUpdateTask";

export default function TaskController() {
  return (
    <div class="mb-14 items-center justify-between sm:flex">
      <h2 class="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>

      <div class="flex items-center space-x-5">
        <Modal>
          <Modal.Open
            opens="add-new-task"
            render={({ onClick }) => (
              <Button type="primary" onClick={onClick}>
                Add New Task
              </Button>
            )}
          />

          <Modal.Window
            windowName="add-new-task"
            render={({ onCloseModal }) => (
              <CreateUpdateTask onCloseModal={onCloseModal} />
            )}
          />
        </Modal>

        <Button type="secondary">Delete All Task</Button>
      </div>
    </div>
  );
}
