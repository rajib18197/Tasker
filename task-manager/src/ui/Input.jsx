import { forwardRef } from "react";

const Input = forwardRef(function ({ type, ...props }, ref) {
  return (
    <input
      class="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
      {...props}
      ref={ref}
    />
  );
});

export default Input;
