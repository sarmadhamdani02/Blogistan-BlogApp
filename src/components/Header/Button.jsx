import React from "react";

const Button = ({
  children,
  textColor = "text-white",
  bgColor = "bg-blue-500",
  hover = "hover:bg-blue-700",
  classname = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded transition duration-200 ${textColor} ${bgColor} ${hover} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
