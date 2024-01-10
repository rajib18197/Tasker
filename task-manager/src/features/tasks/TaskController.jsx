import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateUpdateTask from "./CreateUpdateTask";

export default function TaskController({ onAddTask }) {
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
              <CreateUpdateTask
                onCloseModal={onCloseModal}
                onAddTask={onAddTask}
              />
            )}
          />
        </Modal>

        <Button type="secondary">Delete All Task</Button>
      </div>
    </div>
  );
}

// That's nice to hear! I have a few suggestions that I initially wanted to implement but then cut out. However, for these suggestions to work, you would have to build your own API first, maybe using Supabase, because they would need additional fields in the API response. With that being said, here are 3 suggestions:

// 1) On order, you could let the user define a PIN number for the order. Then, in the page that displays the final order, the user could be allowed to actually edit the order during the first 5 minutes after submitting it, but ONLY if they input the correct PIN number (otherwise, users could edit orders from other people). This would require a PIN to be sent to the API request on order.

// 2) You could add the ability to add or remove ingredients for pizzas in the cart. Again, this would require a change in the API.

// 3) You could persist the cart data using "Redux persist" like in this tutorial: https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

// Hopw this helps!
