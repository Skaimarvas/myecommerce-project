import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { toast } from "react-toastify";

//Icons
import { Icon } from "@iconify/react";
import { MdNavigateNext } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
//Assets
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import bestseller from "../assets/productcard/bseller.png";
import free from "../assets/productcard/free.png";
//Components
import BestsellerProduct from "../components/BestsellerProduct";
import Brands from "../components/Brands";
import RatingStar from "../components/RatingStar";
import SpiningAnimation from "../components/SpiningAnimation";
//Hooks
import { useParams } from "react-router-dom/";
import { useDispatch, useSelector } from "react-redux";
//Actions
import { FETCH_STATES } from "../store/actions/globalActions";
//Thunk
import { getDetail } from "../store/thunks/productThunk";
import { addProductToCart } from "../store/actions/shoppingCartActions";
export default function Product() {
  const dispatch = useDispatch();
  const { pdetail, detailstate } = useSelector((store) => store.product);

  const specPro = useParams();
  console.log("PDETAIL", pdetail);

  const addCart = (e) => {
    e.preventDefault();
    const cartProduct = {
      count: 1,
      checked: true,
      product: pdetail,
    };
    console.log("CARTPRODUCT", cartProduct);
    dispatch(addProductToCart(cartProduct));

    toast.success("Product Added to Cart");
  };

  useEffect(() => {
    dispatch(getDetail(`/${specPro.id}`));
  }, [specPro.id]);

  return (
    <div className="flex flex-col items-center tracking-wider bg-[#FAFAFA]">
      <div className="flex flex-wrap sm:flex-col justify-between items-center w-4/5 gap-3  py-[24px] sm:justify-center ">
        <div className="flex flex-row gap-[15px] items-center py-[15px]  ">
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
        <button className="px-5 py-2" onClick={() => window.history.back()}>
          <Icon icon="pajamas:go-back" className="text-[50px]" />
        </button>
      </div>
      {(detailstate === FETCH_STATES.fetching && <SpiningAnimation />) ||
        (pdetail && (
          <div className="flex flex-wrap justify-center gap-[30px] w-4/5">
            <div className="flex flex-col gap-[20px]">
              <Carousel
                className="tracking-wider w-[506px] sm:w-full"
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
                    className="h-[450px] w-[506px] sm:w-full sm:h-[277px] object-cover object-top"
                    src={pdetail?.images[0].url}
                    alt="image 1"
                  />
                  {pdetail.price > 100 && (
                    <img
                      src={free}
                      className="absolute inset-x-[4%] inset-y-[4%] w-9 h-9 inset"
                      alt=""
                    />
                  )}
                  {pdetail.sell_count > 500 && (
                    <img
                      src={bestseller}
                      className="absolute inset-x-[88%] inset-y-[4%] w-9 h-9"
                      alt=""
                    />
                  )}
                </div>
                <div className="relative">
                  <img
                    className="h-[450px] w-[506px]  sm:w-full sm:h-[277px]  object-cover"
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
                  {pdetail?.name}{" "}
                </h4>
              </div>
              <div className="flex flex-row items-center gap-[10px]">
                <RatingStar rating={pdetail?.rating} />
                <span className="text-[#737373] text-[14px] leading-6">
                  {pdetail?.rating} Reviews
                </span>
              </div>
              <div>
                <span className="text-[#252B42] text-2xl font-bold  ">
                  ${pdetail?.price}
                </span>
              </div>
              <div className="flex flex-row gap-[5px] text-[14px] leading-6 font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className="text-[#23A6F0]"> {pdetail?.stock} </span>
              </div>
              <div>
                <p className="text-[#858585] text-[14px] leading-5 ">
                  {pdetail?.description}
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
                <button
                  onClick={(e) => addCart(e)}
                  className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-[#E8E8E8] transition-transform hover:scale-[1.10] hover:text-blue-900 "
                >
                  <BsCart className="text-[20px]" />
                </button>
                <button className="flex justify-center items-center rounded-full h-[40px] w-[40px] border border-[#E8E8E8]  ">
                  <IoMdEye className="text-[20px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
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
                className="h-[372px] w-[316px] sm:w-full sm:h-full rounded-sm shadow-special"
                src={product3}
                alt="description"
              />
            </div>
            <div className="flex flex-col  gap-[30px] w-[332px]">
              <h3 className="text-2xl text-[#252B42] font-bold">
                the quick fox jumps over
              </h3>
              <p className="text-[#737373] text-[14px] leading-5">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
                <br />
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
                <br />
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
