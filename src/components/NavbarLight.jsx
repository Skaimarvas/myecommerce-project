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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Actions
import { logoutUser, setUserFetchState } from "../store/actions/userActions";
import { FETCH_STATES } from "../store/actions/globalActions";

export default function NavbarLight() {
  const dispatch = useDispatch();
  const tokenValue = localStorage.getItem("token");
  const [categoryVisible, setCategoryVisible] = useState(false);
  const { categories } = useSelector((store) => store.global);

  const male = categories.filter((cat) => cat.gender === "e");
  const female = categories.filter((cat) => cat.gender === "k");

  const categoryMenuToggle = () => {
    setCategoryVisible(!categoryVisible);
  };
  const handleShopEnter = () => {
    setCategoryVisible(true);
  };
  const handleShopLeave = () => {
    setCategoryVisible(false);
  };

  const { email, name } = useSelector((store) => store.userData.user);

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(setUserFetchState(FETCH_STATES.notFetched));
  };

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
        <li>
          {" "}
          <div>
            <div className="flex  items-center gap-[9px] pl-[6px]  font-medium sm:font-normal text-[#252B42] sm:text-[#737373] leading-7 ">
              <Link to="/shopping"> Shop</Link>
              <img
                src={vector}
                alt=""
                onClick={() => categoryMenuToggle()}
                className="sm:hidden"
              />
            </div>
            {categoryVisible && (
              <div>
                <ul className="absolute mt-2 bg-white p-2 rounded shadow z-50 ">
                  {/* {categories.map((cat, index) => (
                  <li key={index}>
                    <Link to={`${cat.gender}/${cat.title}`}> {cat.code} </Link>
                  </li>
                ))} */}
                  <li>
                    <div className="relative">
                      <div className="flex items-center">
                        <Link>Kadın </Link>{" "}
                        <button>
                          <Icon icon="bxs:right-arrow" />
                        </button>{" "}
                      </div>

                      <div className="absolute z-50 ">
                        <ul className="flex flex-col gap-4 ml-[45px]  bg-white p-5 rounded shadow  ">
                          {female.map((cat, index) => (
                            <li key={index}>
                              <Link to={`${cat.gender}/${cat.title}`}>
                                {cat.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      {" "}
                      <Link>Erkek</Link>{" "}
                      <button>
                        <Icon icon="bxs:right-arrow" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Blog</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center text-[#23A6F0] gap-4 sm:hidden">
        {!tokenValue && (
          <Link to="/login">
            <div className=" flex text-base p-[15px] items-center gap-[5px] font-bold  ">
              <FaRegUser />
              <span>Login</span>
            </div>
          </Link>
        )}
        <Gravatar email={email} size={24} className="rounded-full" />
        {tokenValue && <span className="text-[#252B42]"> {name} </span>}
        {tokenValue && (
          <button
            className="rounded-md bg-light-blue-800 hover:bg-light-blue-900 text-white px-2 py-1"
            onClick={() => logoutHandler()}
          >
            <span>Log out</span>
          </button>
        )}

        {!tokenValue && (
          <Link to="/signup">
            <button className="flex gap-2 items-center rounded-md bg-light-blue-800 hover:bg-light-blue-900 text-white   px-[25px] py-[15px] tracking-wider">
              <span>Become a member</span>
              <Icon icon="cil:arrow-right" />
            </button>
          </Link>
        )}
        {tokenValue && (
          <div className="flex items-center">
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
        )}
      </div>
    </div>
  );
}
