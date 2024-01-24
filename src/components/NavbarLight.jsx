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
import { useEffect, useState } from "react";
//Actions
//Components
import NavbarMenu from "./NavbarMenu";
import ShoppingCart from "./ShoppingCart";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function NavbarLight(props) {
  const location = useLocation();
  const { setConfirm } = props;
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const tokenValue = localStorage.getItem("token");
  const { cart } = useSelector((store) => store.shopping);
  const { email, name } = useSelector((store) => store.userData.user);

  const confirmHandler = () => {
    setConfirm(true);
  };
  console.log("LOCATION", location.pathname);

  useEffect(() => {
    setShowCart(false);
  }, [location.pathname]);

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

        <div className="flex items-center sm:hidden">
          <div className="p-[15px]">
            <BsSearch className="text-[20px]" />
          </div>
          <div className="p-[15px]">
            {" "}
            <div className="flex flex-col items-center gap-[5px]">
              <button
                onClick={() => setShowCart(!showCart)}
                className="flex flex-row gap-[5px] transition-transform hover:scale-[1.10] hover:text-blue-900"
              >
                <BsCart className="text-[20px] " />
                <span> {cart.length} </span>
              </button>
              <div className="absolute mt-10 right-4 z-50">
                {showCart && <ShoppingCart isVisible={showCart} />}
              </div>
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
    </div>
  );
}
