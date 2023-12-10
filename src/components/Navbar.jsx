import React from "react";
import NavbarDark from "./NavbarDark";
import NavbarLight from "./NavbarLight";
export default function Navbar() {
  return (
    <div className="flex flex-col gap-[12px] pb-[8px]">
      <NavbarDark />
      <NavbarLight />
    </div>
  );
}
