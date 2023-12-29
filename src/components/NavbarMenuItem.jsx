import React from "react";
import { Link } from "react-router-dom/";

export default function NavbarMenuItem(props) {
  const {
    path,
    img,
    name,
    icon,
    handleMenuClick,
    children,
    setOpen,
    className,
  } = props;
  return (
    <div
      onMouseEnter={() => setOpen && setTimeout(() => setOpen(true), 300)}
      onMouseLeave={() => setOpen && setTimeout(() => setOpen(false), 300)}
      className={`flex items-center gap-[9px]  ${className} `}
    >
      {icon}
      <Link to={`${path}`}> {name} </Link>
      <button onClick={() => handleMenuClick && handleMenuClick()}>
        <img src={img} alt="" />
        {children}
      </button>
    </div>
  );
}
