import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";

//Icons
import { Icon } from "@iconify/react";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
//Hooks
import { useDispatch, useSelector } from "react-redux";
//Actions
import { logoutUser, setUserFetchState } from "../store/actions/userActions";
import { FETCH_STATES } from "../store/actions/globalActions";
//Components
import NavbarMenu from "./NavbarMenu";

export default function NavbarLight(props) {
  const { setConfirm } = props;
  const dispatch = useDispatch();
  const tokenValue = localStorage.getItem("token");

  const { email, name } = useSelector((store) => store.userData.user);

  const confirmHandler = () => {
    setConfirm(true);
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

      <NavbarMenu />

      <div className="flex items-center text-[#23A6F0] gap-4 sm:flex-col ">
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
            onClick={() => confirmHandler()}
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
