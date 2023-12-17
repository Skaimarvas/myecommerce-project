import React from "react";
import { Carousel } from "@material-tailwind/react";
import shophero from "../assets/shophero.png";
import photo3 from "../assets/sliderphoto3.jpeg";

export default function CarouselMid() {
  return (
    <>
      <Carousel
        autoplay
        loop
        className="tracking-wider bg-gradient-to-r from-[#00000059] to-[#00000059] sm:flex sm:items-center"
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
        <div className="bg-[#23856D] h-full w-full text-white pt-[106px] tracking-wider ">
          <div className=" flex flex-wrap justify-center   items-center gap-[30px] sm:px-[20px]  ">
            <div className=" flex flex-col text-left gap-[35px] max-w-[509px] sm:items-center">
              <h5 className="font-bold text-base sm:text-center sm:text-[20px] sm:font-normal sm:leading-[30px] ">
                SUMMER 2020
              </h5>
              <h2 className="text-[58px] font-bold leading-[80px] sm:text-[40px] sm:leading-[50px] sm:text-center  ">
                {" "}
                Vita Classic Product{" "}
              </h2>
              <h5 className="text-[20px] leading-[30px] sm:text-center ">
                We know how large objects will act, We know how are objects will
                act, We know
              </h5>
              <div className="flex flex-wrap items-center gap-[34px] sm:flex-col sm:gap-[20px] ">
                <span className="text-2xl font-bold text-center ">$16.48</span>
                <button className="bg-[#2DC071] hover:bg-[#25a15f] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
                  <span className="text-[14px] text-center leading-[22px] font-bold ">
                    ADD TO CART
                  </span>
                </button>
              </div>
            </div>
            <div className=" ">
              <img
                className="h-[600px] w-[443px] object-cover object-top"
                src={shophero}
                alt="image 1"
              />
            </div>
          </div>
        </div>
        <div className="relative  ">
          <img
            className="h-screen  w-full object-cover sm:shadow-lg"
            src={photo3}
            alt="image 1"
          />
          <div className="flex  items-end py-[112px]  justify-center absolute inset-0  h-screen  w-full text-white bg-gradient-to-r from-[#00000059] to-[#00000059] ">
            <div className="flex flex-row justify-center gap-[30px] py-[48px] w-[1044px]">
              <div className="flex flex-col items-center  text-left gap-[24px] py-[40px] max-w-[580px]">
                <h2 className="text-[58px] font-bold leading-[80px]  text-center">
                  {" "}
                  BLACK FRIDAY{" "}
                </h2>
                <h5 className="text-[20px] leading-[30px]  text-center">
                  We know how large objects will act, but things on a small
                  scale just do not act that way.
                </h5>
                <button className="bg-[#23A6F0] hover:bg-[#1c96dd] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
                  <span className="text-2xl font-bold ">Start Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
