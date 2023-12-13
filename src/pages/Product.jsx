import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
//Icons
import { MdNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
//Assets
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
//Components
import BestsellerProduct from "../components/BestsellerProduct";
import Brands from "../components/Brands";

export default function Product() {
  return (
    <div className="flex flex-col items-center tracking-wider bg-[#FAFAFA]">
      <div className="flex flex-wrap justify-between items-center w-4/5  py-[24px]">
        <div className="flex flex-row gap-[15px] items-center py-[15px] ">
          <Link to="/">
            {" "}
            <span className="text-[#252B42] text-base font-bold">
              Home
            </span>{" "}
          </Link>
          <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />
          <span className="text-[#BDBDBD] text-base font-bold text-center">
            Shop
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px] w-4/5">
        <div className="flex flex-col gap-[20px]">
          <Carousel
            className="tracking-wider w-[506px] "
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4  flex -translate-x-2/4 ">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-3  cursor-pointer transition-all content-[''] ${
                      activeIndex === i
                        ? "w-[70px] bg-white"
                        : "w-[70px] bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="relative ">
              <img
                className="h-[450px] w-[506px] object-cover"
                src={product1}
                alt="image 1"
              />
            </div>
            <div className="relative">
              <img
                className="h-[450px] w-[506px] object-cover"
                src={product2}
                alt="image 2"
              />
            </div>
          </Carousel>
          <div className="flex flex-row gap-[19px]">
            <img
              className="w-[100px] h-[75px] object-cover"
              src={product1}
              alt="small image 1"
            />
            <img
              className="w-[100px] h-[75px] object-cover"
              src={product2}
              alt="small image 2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[15px] w-[510px] p-5 ">
          <div>
            <h4 className="text-[20px] text-[#252B42] leading-[30px]">
              {" "}
              Floating Phone{" "}
            </h4>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <div className="flex flex-row text-[#ffd700] gap-[5px] ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <span className="text-[#737373] text-[14px] leading-6">
              10 Reviews
            </span>
          </div>
          <div>
            <span className="text-[#252B42] text-2xl font-bold  ">
              $1,139.33
            </span>
          </div>
          <div className="flex flex-row gap-[5px] text-[14px] leading-6 font-bold">
            <span className="text-[#737373]">Availability :</span>
            <span className="text-[#23A6F0]">In Stock</span>
          </div>
          <div>
            <p className="text-[#858585] text-[14px] leading-5 ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>

          <hr />

          <div className="flex flex-row gap-[10px]">
            <div className="rounded-full h-[30px] w-[30px] bg-[#23A6F0]"></div>
            <div className="rounded-full h-[30px] w-[30px] bg-[#2DC071]"></div>
            <div className="rounded-full h-[30px] w-[30px] bg-[#E77C40]"></div>
            <div className="rounded-full h-[30px] w-[30px] bg-[#252B42]"></div>
          </div>
          <div className="flex flex-row gap-[10px] pt-20">
            <button className="bg-[#23A6F0] hover:bg-[#1c96dd] shadow-lg rounded-md py-[10px] px-[20px] ">
              <span className="text-[14px] leading-6 text-white font-bold tracking-wider">
                Select Options
              </span>
            </button>
            <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-[#E8E8E8]  ">
              <FaRegHeart className="text-[20px]" />
            </button>
            <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-[#E8E8E8]  ">
              <BsCart className="text-[20px]" />
            </button>
            <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-[#E8E8E8]  ">
              <IoMdEye className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white w-full">
        <div className="flex flex-col w-4/5">
          <div className="flex flex-row justify-center">
            <div className="p-[24px]">
              <span className="text-[#737373] text-[14px] font-semibold leading-6">
                Descripton
              </span>
            </div>
            <div className="p-[24px]">
              <span className="text-[#737373] text-[14px] font-bold leading-6">
                Additional Information
              </span>
            </div>
            <div className="p-[24px]">
              <span className="text-[#737373] text-[14px] font-bold leading-6">
                Reviews <span className="text-[#23856D]">(0)</span>
              </span>
            </div>
          </div>

          <hr className="py-[20px]" />

          <div className="flex flex-wrap justify-center  gap-[30px]">
            <div>
              <img
                className="h-[372px] w-[316px] rounded-sm"
                src={product3}
                alt="description"
              />
            </div>
            <div className="w-[332px]">
              <h3 className="text-2xl text-[#252B42] font-bold">
                the quick fox jumps over
              </h3>
              <p className="text-[#737373] text-[14px] leading-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-2xl text-[#252B42] font-bold">
                  the quick fox jumps over
                </h3>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-2xl text-[#252B42] font-bold">
                  the quick fox jumps over
                </h3>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <MdNavigateNext className="text-[25px] text-[#BDBDBD]" />{" "}
                    <span className="text-[#737373] text-[14px] leading-6 font-bold">
                      the quick fox jumps over the lazy dog
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestsellerProduct />
      <Brands />
    </div>
  );
}
