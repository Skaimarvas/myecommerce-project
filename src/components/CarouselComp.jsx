import React from "react";
import { Carousel } from "@material-tailwind/react";
import photo1 from "../assets/sliderphoto1.jpeg";
import photo3 from "../assets/sliderphoto3.jpeg";

export default function CarouselComp() {
  return (
    <>
      <Carousel
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
        <div className="relative">
          <img
            className="h-screen w-full object-cover"
            src={photo1}
            alt="image 1"
          />
          <div className="flex items-center justify-center absolute inset-0  h-full w-full text-white">
            <div className="flex flex-row items-center gap-[30px] py-[48px] w-[1044px]">
              <div className="flex flex-col text-left gap-[35px] max-w-[599px]">
                <h5 className="font-bold text-base tracking-[0.1px]">
                  SUMMER 2020
                </h5>
                <h2 className="text-[58px] font-bold leading-[80px] tracking-[0.2px]">
                  {" "}
                  NEW COLLECTION{" "}
                </h2>
                <h5 className="text-[20px] leading-[30px] tracking-[0.2px]">
                  We know how large objects will act, but things on a small
                  scale.
                </h5>
                <button className="bg-[#2DC071] hover:bg-[#25a15f] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
                  <span className="text-2xl font-bold tracking-[0.1px]">
                    SHOP NOW
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-screen w-full object-cover"
            src={photo3}
            alt="image 1"
          />
          <div className="flex  items-end py-[112px]  justify-center absolute inset-0  h-full w-full text-white bg-gradient-to-r from-[#00000059] to-[#00000059] ">
            <div className="flex flex-row justify-center gap-[30px] py-[48px] w-[1044px]">
              <div className="flex flex-col items-center  text-left gap-[24px] py-[40px] max-w-[580px]">
                <h2 className="text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center">
                  {" "}
                  BLACK FRIDAY{" "}
                </h2>
                <h5 className="text-[20px] leading-[30px] tracking-[0.2px] text-center">
                  We know how large objects will act, but things on a small
                  scale just do not act that way.
                </h5>
                <button className="bg-[#23A6F0] hover:bg-[#1c96dd] shadow-lg rounded-md py-[15px] px-[40px] max-w-[221px]">
                  <span className="text-2xl font-bold tracking-[0.1px]">
                    Start Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}
