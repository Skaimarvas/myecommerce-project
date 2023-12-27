import React from "react";
import NavbarDark from "./NavbarDark";
import NavbarLight from "./NavbarLight";
export default function Navbar(props) {
  const { setConfirm } = props;
  return (
    <div className="flex flex-col gap-[12px] pb-[8px]">
      <NavbarDark />
      <NavbarLight setConfirm={setConfirm} />
    </div>
  );
}
