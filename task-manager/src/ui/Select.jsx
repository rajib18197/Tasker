import { forwardRef } from "react";

const Select = forwardRef(function ({ options = [], name, ...props }, ref) {
  return (
    <select
      class="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
      name={name}
      {...props}
      ref={ref}
    >
      <option value="">Select {name[0].toUpperCase() + name.slice(1)}</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

export default Select;
