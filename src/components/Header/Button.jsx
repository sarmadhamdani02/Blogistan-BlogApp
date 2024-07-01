import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#734af6]",
    textColor = "text-white",
    hoverColor = "hover:text-[#734af6] hover:bg-transparent hover:border hover:border-[#734af6]",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} ${hoverColor}`} {...props}>
            {children}
        </button>
    );
}
