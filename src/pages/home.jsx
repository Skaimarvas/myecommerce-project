import React from "react";
import CarouselComp from "../components/CarouselComp";
import EditorPick from "../components/EditorPick";
import BestsellerProduct from "../components/BestsellerProduct";
import CarouselMid from "../components/CarouselMid";
import ContainerFluid from "../components/ContainerFluid";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <>
      <CarouselComp />
      <EditorPick />
      <BestsellerProduct />
      <CarouselMid />
      <ContainerFluid />
      <Blog />
    </>
  );
}
