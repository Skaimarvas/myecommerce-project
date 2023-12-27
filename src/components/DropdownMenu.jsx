import React from "react";

export default function DropdownMenu(props) {
  const { children, className } = props;
  return (
    <ul className={`absolute mt-2 bg-white   rounded shadow z-50 ${className}`}>
      {" "}
      {children}{" "}
    </ul>
  );
}
