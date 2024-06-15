import React, { useId } from "react";

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}) {
  const id = useId();
  return (
    <div className=" w-full">
      {label && (
        <label className={className} typeof={type} htmlFor={id} {...props}>
          {label}
        </label>
      )}

      <input
        type="text"
        className={`${className} Enter your username" class="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full`}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});
export default Input;
