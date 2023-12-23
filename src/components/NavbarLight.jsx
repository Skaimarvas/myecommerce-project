import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";
//Icons
import vector from "../assets/Vector.png";
import { Icon } from "@iconify/react";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
//Hooks
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setUserFetchState } from "../store/actions/userActions";
import { FETCH_STATES } from "../store/actions/globalActions";

export default function NavbarLight() {
  const dispatch = useDispatch();
  const [value] = useLocalStorage("token");
  const tokenValue = localStorage.getItem("token");
  const { email, token } = useSelector((store) => store.userData.user);

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(setUserFetchState(FETCH_STATES.notFetched));
  };

  console.log("TOKENVALUE", value);
  useEffect(() => {}, [tokenValue]);

  return (
    <div className="flex flex-wrap  justify-between  md:justify-center items-center sm:flex-col tracking-wider px-[10px] ">
      <div className="sm:w-full sm:flex justify-around items-center">
        <div className="flex py-[13px] pr-[79px]  ">
          <span className="text-2xl text-center text-[#252B42] font-bold ">
            Bandage
          </span>
        </div>

        <Icon
          className="sm:block hidden text-[30px]"
          icon="material-symbols:search"
        />
        <Icon className="sm:block hidden text-[30px]" icon="mdi:cart-outline" />
        <Icon className="sm:block hidden text-[30px]" icon="typcn:th-menu" />
      </div>

      <ul className="flex flex-wrap sm:flex-col text-[18px] sm:text-[30px] font-bold sm:font-normal text-[#737373] leading-6 sm:leading-[45px] justify-center items-center gap-[15px] py-3 sm:py-[98px]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="flex  items-center gap-[9px] pl-[6px]  font-medium sm:font-normal text-[#252B42] sm:text-[#737373] leading-7 ">
          <Link to="/productlist"> Shop</Link>

          <button className="sm:hidden">
            {" "}
            <img src={vector} alt="" />{" "}
          </button>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>Blog</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center text-[#23A6F0] sm:hidden">
        {!tokenValue && (
          <Link to="/signup">
            <div className=" flex text-base p-[15px] items-center gap-[5px] font-bold  ">
              <FaRegUser />
              <span>Sig up / Register</span>
            </div>
          </Link>
        )}
        <Gravatar email={email} size={24} className="rounded-full" />
        {tokenValue && (
          <button
            className="rounded-md bg-light-blue-800 hover:bg-light-blue-900 text-white px-2 py-1"
            onClick={() => logoutHandler()}
          >
            <span>Log out</span>
          </button>
        )}

        {!tokenValue && (
          <Link to="/login">
            <button className="rounded-md bg-light-blue-800 hover:bg-light-blue-900 text-white px-2 py-1">
              <span>Log in</span>
            </button>
          </Link>
        )}
        <div className="p-[15px]">
          <BsSearch className="text-[20px]" />
        </div>
        <div className="p-[15px]">
          {" "}
          <div className="flex items-center gap-[5px]">
            <BsCart className="text-[20px]" /> <span>1</span>{" "}
          </div>
        </div>
        <div className="p-[15px]">
          <div className="flex items-center gap-[5px]">
            <FaRegHeart className="text-[20px]" />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
