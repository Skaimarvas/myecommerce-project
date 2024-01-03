import React from "react";
import Gravatar from "react-gravatar";
import vector from "../assets/Vector.png";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

//Hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//Components
import NavbarMenuItem from "./NavbarMenuItem";
import DropdownMenu from "./DropdownMenu";
export default function NavbarMenu(props) {
  const { categories } = useSelector((store) => store.global);
  const [openMenu, setOpenMenu] = useState(false);
  const [open1SubMenu, setOpen1SubMenu] = useState(false);
  const [open2SubMenu, setOpen2SubMenu] = useState(false);

  const male = categories.filter((cat) => cat.gender === "e");
  const female = categories.filter((cat) => cat.gender === "k");

  return (
    <nav>
      <ul className="flex flex-wrap sm:flex-col text-[18px] sm:text-[30px] font-bold sm:font-normal text-[#737373] leading-6 sm:leading-[45px] justify-center items-center gap-[15px]  sm:py-[30px]">
        <NavbarMenuItem
          path="/"
          name="Home"
          icon={<Icon icon="bxs:home" />}
          className="hover:border-b-2 border-black"
        />
        <NavbarMenuItem
          path="/shopping"
          name="Shop"
          icon={<Icon icon="bi:shop" />}
          setOpen={setOpenMenu}
          img={vector}
          className="hover:border-b-2 border-black"
        >
          {openMenu && (
            <>
              {" "}
              <DropdownMenu className="-ml-[88px]">
                <NavbarMenuItem
                  path="/shopping"
                  className="p-2 hover:bg-blue-gray-50"
                  name="Erkek"
                  setOpen={setOpen1SubMenu}
                  icon={<Icon icon="material-symbols:man" />}
                >
                  {open1SubMenu && (
                    <DropdownMenu className="ml-2 -mt-[18px] ">
                      {male.map((pro) => (
                        <NavbarMenuItem
                          path={`/shopping/${
                            pro.gender
                          }/${pro.title.toLowerCase()}`}
                          key={pro.id}
                          className="hover:bg-blue-gray-50 p-2 "
                          name={pro.title}
                        />
                      ))}
                    </DropdownMenu>
                  )}
                </NavbarMenuItem>
                <NavbarMenuItem
                  path="/shopping"
                  setOpen={setOpen2SubMenu}
                  className="p-2 hover:bg-blue-gray-50"
                  name="Kadın"
                  icon={<Icon icon="material-symbols:woman" />}
                >
                  {open2SubMenu && (
                    <DropdownMenu className="ml-2 -mt-[18px] ">
                      {female.map((pro) => (
                        <NavbarMenuItem
                          path={`/shopping/${
                            pro.gender
                          }/${pro.title.toLowerCase()}`}
                          key={pro.id}
                          className="hover:bg-blue-gray-50 p-2 "
                          name={pro.title}
                        />
                      ))}
                    </DropdownMenu>
                  )}
                </NavbarMenuItem>
              </DropdownMenu>
            </>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem
          className="hover:border-b-2 border-black"
          path="/about"
          name="About"
          icon={<Icon icon="mdi:about-circle-outline" />}
        />
        <NavbarMenuItem
          className="hover:border-b-2 border-black"
          path=""
          name="Blog"
          icon={<Icon icon="mdi:blog" />}
        />
        <NavbarMenuItem
          className="hover:border-b-2 border-black"
          path="/contact"
          name="Contact"
          icon={<Icon icon="ic:round-contact-phone" />}
        />
      </ul>
    </nav>
  );
}
