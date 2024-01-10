import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

export default function CreateUpdateTask({ onCloseModal }) {
  return (
    <form class="mx-auto w-full max-w-[1040px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:p-11 overflow-y-auto h-[550px]">
      <h2 class="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div class="space-y-9 text-white lg:space-y-10">
        <FormRow label="Title">
          <Input type="text" name="title" id="title" required />
        </FormRow>

        <FormRow label="Description">
          <textarea
            class="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </FormRow>

        <div class="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <FormRow label="Tags">
            <Input type="text" name="tags" id="tags" required />
          </FormRow>

          <FormRow label="Priority">
            <Select name="priority" id="priority" required />
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
        <Button>Close</Button>
      </div>
    </form>
  );
}
