import React, { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";

const ProductSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    { id: 1, imageUrl: product1, name: "Product 1" },
    { id: 2, imageUrl: product2, name: "Product 2" },
    { id: 3, imageUrl: product3, name: "Product 3" },
  ];

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const handleThumbnailClick = (index) => {
    setSelectedProduct(index);
    slider1.current.slickGoTo(index);
  };

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider2.current,
    ref: slider1,
  };

  const settings2 = {
    asNavFor: slider1.current,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    ref: slider2,
  };

  return (
    <div>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider {...settings1} className=" blackborder">
        {products.map((product) => (
          <img
            key={product.id}
            className="h-[450px] w-[506px] object-cover"
            src={product.imageUrl}
            alt={product.name}
          />
        ))}
      </Slider>
      <h4>Second Slider</h4>
      <Slider {...settings2} className="flex flex-row justify-center gap-1">
        {products.map((product, index) => (
          <img
            key={product.id}
            src={product.imageUrl}
            alt={product.name}
            onClick={() => handleThumbnailClick(index)}
            className="w-[100px] h-[75px] object-cover"
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
