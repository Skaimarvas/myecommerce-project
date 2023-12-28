import React from "react";
import { Link } from "react-router-dom";
//Components
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/productcard";
import Brands from "../components/Brands";
import InfiniteScroll from "react-infinite-scroll-component";
//Icons
import { MdNavigateNext } from "react-icons/md";
import { PiSquaresFourFill, PiListChecksThin } from "react-icons/pi";

//Hooks
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/thunks/productThunk";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ProductList() {
  const { categories } = useSelector((store) => store.global);
  const { productlist, productcount } = useSelector((store) => store.product);
  const { register, watch } = useForm();
  const [count, setCount] = useState(25);
  const dispatch = useDispatch();

  const fetchedData = () => {
    // const newSize = count + 25;
    // setCount(newSize);
    dispatch(getProduct(`?offset=${productlist.length}`));
  };

  const popularity = productlist;

  const ascendingPriceProduct = [...productlist].sort(
    (a, b) => a.price - b.price
  );
  const descendingPriceProduct = [...productlist].sort(
    (a, b) => b.price - a.price
  );
  const ascendingRatingProduct = [...productlist].sort(
    (a, b) => a.rating - b.rating
  );
  const descendingRatingProduct = [...productlist].sort(
    (a, b) => b.rating - a.rating
  );

  const filteroption =
    watch("filter") === "ascendingPriceProduct"
      ? ascendingPriceProduct
      : watch("filter") === "descendingPriceProduct"
      ? descendingPriceProduct
      : watch("filter") === "descendingRatingProduct"
      ? descendingRatingProduct
      : watch("filter") === "ascendingRatingProduct"
      ? ascendingRatingProduct
      : popularity;

  const descendingList = [...categories].sort((a, b) => b.rating - a.rating);
  const topCategories = descendingList.slice(0, 5);
  return (
    <div className="flex flex-col items-center  tracking-wider  ">
      <div className="flex flex-col items-center w-full bg-[#FAFAFA]">
        <div className="flex flex-wrap justify-between items-center w-4/5  py-[24px] sm:flex-col sm:gap-[30px]">
          <div>
            <h3 className="text-[#252B42] text-2xl font-bold">Shop</h3>
          </div>
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

        <div className="flex flex-wrap justify-around  w-4/5 pb-[48px] sm:flex-col sm:items-center sm:gap-[15px] ">
          {topCategories?.map((cat, index) => (
            <Link key={index} to={`${cat.gender}/${cat.title}`}>
              {" "}
              <ShopCard
                img={cat.img}
                title={cat.title}
                gender={cat.gender}
              />{" "}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center w-4/5 py-[40px] sm:flex-col sm:gap-[24px]">
        <div>
          <span className="text-[#737373] text-[14px] leading-6 font-bold">
            Showing all {productlist.length} results
          </span>
        </div>
        <div className="flex flex-row items-center gap-[15px] sm:justify-between sm:w-4/5">
          <span className="text-[#737373] text-[14px] leading-6 font-bold">
            Views:
          </span>
          <button className="p-[15px]">
            <PiSquaresFourFill className="text-2xl sm:text-[40px] text-[#252B42]" />
          </button>
          <button className="p-[15px]">
            <PiListChecksThin className="text-2xl sm:text-[40px] text-[#737373]" />
          </button>
        </div>
        <div>
          <form className="flex flex-row gap-[15px]">
            <label>
              <select
                {...register("filter")}
                id="filteroption"
                defaultValue="Popularity"
                className="flex  w-[200px] h-[50px] rounded-md bg-[#F9F9F9] px-[10px]"
              >
                <option value="popularity">Popularity</option>
                <option value="ascendingPriceProduct">Price Ascending</option>
                <option value="descendingPriceProduct">Price Descending</option>
                <option value="ascendingRatingProduct">Rating Ascending</option>
                <option value="descendingRatingProduct">
                  Rating Descending
                </option>
              </select>
            </label>
            <button
              className="w-[91px] h-[50px] bg-[#23A6F0] py-[10px] px-[20px] rounded-md"
              type="Submit"
              onClick={(e) => e.preventDefault()}
            >
              <span className="text-white text-center text-[14px] leading-6 tracking-wider">
                Filter
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-[30px] w-4/5 ">
        {productlist?.map((pro, index) => (
          <ProductCard
            key={index}
            name={pro.name}
            description={pro.description}
            images={pro.images}
            price={pro.price}
          />
        ))}
      </div> */}

      <InfiniteScroll
        dataLength={productlist.length}
        next={fetchedData}
        hasMore={productlist.length === productcount ? false : true}
        loader={<h4> Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="blackborder flex flex-wrap justify-center gap-[30px] ">
          {filteroption?.map((pro, index) => (
            <ProductCard
              key={index}
              name={pro.name}
              description={pro.description}
              images={pro.images}
              price={pro.price}
            />
          ))}
        </div>
      </InfiniteScroll>

      <div className="py-[40px] ">
        <button className="border border-[#BDBDBD] bg-[#F3F3F3] p-[25px] hover:bg-blue-gray-100 rounded-l-sm">
          {" "}
          <span className="text-[#BDBDBD] text-[14px] text-center leading-6 ">
            First
          </span>{" "}
        </button>
        <button className="border border-[#E9E9E9] py-[25px] px-[20px] hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] ">
          <span className="text-[14px]    text-center font-bold leading-6">
            1
          </span>
        </button>
        <button className="border border-[#E9E9E9] py-[25px] px-[20px] hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] ">
          <span className="text-[14px]    text-center font-bold leading-6">
            2
          </span>
        </button>
        <button className="border border-[#E9E9E9] py-[25px] px-[20px] hover:bg-[#23A6F0] hover:text-white text-[#23A6F0] ">
          <span className="text-[14px]    text-center font-bold leading-6">
            3
          </span>
        </button>
        <button className="border border-[#E9E9E9] p-[25px]  hover:text-white text-[#23A6F0] hover:bg-[#23A6F0] rounded-r-sm">
          <span className="text-[14px]  text-center font-bold leading-6">
            Next
          </span>
        </button>
      </div>
      <Brands />
    </div>
  );
}
