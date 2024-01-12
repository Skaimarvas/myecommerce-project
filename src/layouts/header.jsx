import React from "react";
import Navbar from "../components/Navbar";
function Header(props) {
  const { setConfirm } = props;
  return (
    <div>
      <Navbar setConfirm={setConfirm} />
    </div>
  );
}

export default Header;
