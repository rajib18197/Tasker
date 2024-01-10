import { useState } from "react";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

export default function CreateUpdateTask({ onCloseModal, onAddTask }) {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    tags: [],
    priority: "",
    hasFavourite: false,
    pin: "",
  });

  function handleChange(e) {
    setTaskData((cur) => ({
      ...cur,
      [e.target.name]:
        e.target.name === "tags" ? e.target.value.split(",") : e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskData);

    onAddTask({ id: crypto.randomUUID(), ...taskData });
  }

  return (
    <form
      class="mx-auto w-full max-w-[1040px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11 overflow-y-auto h-[550px]"
      onSubmit={handleSubmit}
    >
      <h2 class="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div class="space-y-9 text-white lg:space-y-10">
        <FormRow label="Title">
          <Input
            type="text"
            name="title"
            id="title"
            value={taskData.value}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow label="Pin">
          <Input
            type="number"
            name="pin"
            id="pin"
            value={taskData.pin}
            onChange={handleChange}
            required
          />
        </FormRow>

        <FormRow label="Description">
          <textarea
            class="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            value={taskData.description}
            onChange={handleChange}
            required
          ></textarea>
        </FormRow>

        <div class="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <FormRow label="Tags">
            <Input
              type="text"
              name="tags"
              id="tags"
              value={taskData.tags}
              onChange={handleChange}
              required
            />
          </FormRow>

          <FormRow label="Priority">
            <Select
              name="priority"
              id="priority"
              value={taskData.priority}
              onChange={handleChange}
              options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
              ]}
              required
            />
            {/* <select
              class="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select> */}
          </FormRow>
        </div>
      </div>

      <div class="mt-16 flex justify-center lg:mt-20">
        <Button type="submit">Save</Button>
        <Button type="secondary">Close</Button>
      </div>
    </form>
  );
}
