import React from "react";
import vector from "../assets/Vector.png";
import { Icon } from "@iconify/react";

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

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
      <ul className="flex flex-wrap sm:flex-col text-[18px] sm:text-[30px] font-bold sm:font-normal text-[#737373] leading-6 sm:leading-[45px] justify-center items-center gap-[30px]  sm:py-[30px]">
        <NavbarMenuItem path="/" name="Home" className=" border-black" />
        <NavbarMenuItem
          path="/shopping"
          name="Shop"
          setOpen={setOpenMenu}
          img={vector}
          className="border-black "
        >
          {openMenu && (
            <>
              {" "}
              <DropdownMenu className="-ml-12 p-2 sm:hidden">
                <NavbarMenuItem
                  path="/shopping"
                  className="p-2 hover:bg-blue-gray-50"
                  name="Erkek"
                  setOpen={setOpen1SubMenu}
                  icon={<Icon icon="material-symbols:man" />}
                >
                  {open1SubMenu && (
                    <DropdownMenu className="ml-5 p-2 -top-2 ">
                      {male.map((pro) => (
                        <>
                          <NavbarMenuItem
                            path={`/shopping/${
                              pro.gender
                            }/${pro.title.toLowerCase()}`}
                            key={pro.id}
                            className="hover:bg-blue-gray-50 p-2 "
                            name={pro.title}
                          />
                          <hr />
                        </>
                      ))}
                    </DropdownMenu>
                  )}
                </NavbarMenuItem>
                <hr />
                <NavbarMenuItem
                  path="/shopping"
                  setOpen={setOpen2SubMenu}
                  className="p-2 hover:bg-blue-gray-50"
                  name="Kadın"
                  icon={<Icon icon="material-symbols:woman" />}
                >
                  {open2SubMenu && (
                    <DropdownMenu className="ml-5 p-2 top-10">
                      {female.map((pro) => (
                        <>
                          <NavbarMenuItem
                            path={`/shopping/${
                              pro.gender
                            }/${pro.title.toLowerCase()}`}
                            key={pro.id}
                            className="hover:bg-blue-gray-50 p-2 "
                            name={pro.title}
                          />
                          <hr />
                        </>
                      ))}
                    </DropdownMenu>
                  )}
                </NavbarMenuItem>
              </DropdownMenu>
            </>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem className=" border-black" path="/about" name="About" />
        <NavbarMenuItem className=" border-black" path="" name="Blog" />
        <NavbarMenuItem
          className=" border-black"
          path="/contact"
          name="Contact"
        />
      </ul>
    </nav>
  );
}
