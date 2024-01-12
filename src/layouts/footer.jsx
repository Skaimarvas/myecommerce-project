import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center tracking-wider ">
      <div className="flex justify-center bg-[#FAFAFA] w-full">
        <div className=" flex flex-wrap justify-between sm:flex-col items-center py-[40px] w-4/5  ">
          <div className=" flex py-[13px] ">
            <h3 className=" text-[#252B42] text-2xl font-bold ">Bandage</h3>
          </div>
          <div className=" flex flex-row gap-[20px] text-[#23A6F0] text-[24px]">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <hr className=" w-4/5" />
      <div className=" flex flex-wrap justify-center gap-[30px] py-[50px] w-4/5   sm:flex-col ">
        <div className=" flex flex-col gap-[20px]">
          <h5 className="text-base text-[#252B42] font-bold traking-[0.1px]">
            Company Info
          </h5>
          <div className="flex flex-col gap-[10px] pr-10">
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              About Us
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Carrier
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              We are hiring
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Blog
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h5 className="text-base text-[#252B42] font-bold traking-[0.1px]">
            Legal
          </h5>
          <div className="flex flex-col gap-[10px] pr-10">
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              About Us
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Carrier
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              We are hiring
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Blog
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h5 className="text-base text-[#252B42] font-bold traking-[0.1px]">
            Features
          </h5>
          <div className="flex flex-col gap-[10px] pr-10">
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Business Marketing
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              User Analytic
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Live Chat
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Unlimited Support
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <h5 className="text-base text-[#252B42] font-bold traking-[0.1px]">
            Resources
          </h5>
          <div className="flex flex-col gap-[10px] pr-10">
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              IOS & Android
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Watch a Demo
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              Customers
            </span>
            <span className="text-[#737373] text-[14px] font-bold leading-6">
              API
            </span>
          </div>
        </div>

        <div className=" flex flex-col gap-[20px]">
          <h5 className="text-base text-[#252B42] font-bold traking-[0.1px]">
            Get In Touch
          </h5>
          <div>
            <div className="flex ">
              <form className="flex flex-wrap sm:flex-col sm:w-full items-center justify-center">
                <label className="sm:w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="text-[14px] leading-7  bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-sm w-[204px] sm:w-full  h-[58px] pl-4  "
                  />
                </label>
                <button
                  type="submit"
                  className="bg-[#23A6F0] h-[58px] w-[117px] sm:w-full rounded-r-sm hover:bg-[#1e90d2]"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="text-white text-[14px] text-center leading-7 ">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>
            <p className="text-[#737373] text-[12px] leading-7  font-medium">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#FAFAFA] w-full">
        <div className=" flex w-4/5 py-[25px] sm:px-[40px] sm:justify-center ">
          <h6 className=" text-[#737373] text-[14px] font-bold sm:text-center ">
            Made With Love By Finland All Right Reserved
          </h6>
        </div>
      </div>
    </div>
  );
}
