import React from "react";
import ContentCard from "../components/ContentCard";
export default function Blog() {
  return (
    <div className="flex flex-col items-center py-[112px] gap-[80px] tracking-wider">
      <div className="flex flex-col items-center  gap-[10px] max-w-[500px] sm:px-[40px]">
        <h6 className="text-[#23A6F0] text-center text-[14px] font-bold leading-6  ">
          Practice Advice
        </h6>
        <h2 className="text-[#252B42] text-center text-[40px] font-bold leading-[50px] ">
          Featured Posts
        </h2>
        <p className="text-[#737373] text-center text-[14px] leading-5 ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-[10px] justify-center">
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </div>
  );
}
