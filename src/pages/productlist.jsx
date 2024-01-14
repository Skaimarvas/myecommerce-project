//Components
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/ProductCard";
import Brands from "../components/Brands";
import InfiniteScroll from "react-infinite-scroll-component";
import SpiningAnimation from "../components/SpiningAnimation";
import { Select, Option } from "@material-tailwind/react";

//Icons
import { MdNavigateNext } from "react-icons/md";
import { PiSquaresFourFill, PiListChecksThin } from "react-icons/pi";

//Thunk
import { getCategories } from "../store/thunks/globalThunk";
import { getProduct } from "../store/thunks/productThunk";

//Actions
import { FETCH_STATES } from "../store/actions/globalActions";
import { setProductEmpty } from "../store/actions/productActions";

//Hooks
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("filter");
  const sort = queryParams.get("sort");
  const category = queryParams.get("category");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories, cfetchstate } = useSelector((store) => store.global);
  const { productlist, productcount } = useSelector((store) => store.product);
  const { register, watch, control } = useForm({
    defaultValues: {
      search: search ? search : "",
      sort: sort ? sort : "",
    },
  });
  const searchValue = watch("search") ? `&filter=${watch("search")}` : "";
  const sortValue = watch("sort") ? `&sort=${watch("sort")}` : "";
  const categoryValue = watch("category")
    ? `&category=${watch("category")}`
    : "";

  const applyFilter = (offsetValue) => {
    setCount(offsetValue);
    const queryParams = `?offset=${offsetValue}${categoryValue}${searchValue}${sortValue}`;
    const newURL = `${queryParams}`;
    history.push(newURL);
    dispatch(getProduct(newURL));
  };

  const filterHandler = (e) => {
    e.preventDefault();
    setCount(0);
    dispatch(setProductEmpty());
    applyFilter(0);
  };

  const fetchedData = () => {
    const offsetcalculate = count + 25;
    applyFilter(offsetcalculate);
  };

  const descendingList = [...categories].sort((a, b) => b.rating - a.rating);
  const topCategories = descendingList.slice(0, 5);

  useEffect(() => {
    dispatch(setProductEmpty());
    const offsetparam = `?offset=${count}`;
    const queryParams = `${categoryValue}${searchValue}${sortValue}`;
    const newURL = `${offsetparam}${queryParams}`;
    if (newURL) {
      dispatch(getCategories());
      dispatch(getProduct(newURL));
    } else if (productlist.length === 0) {
      dispatch(getCategories());
      dispatch(getProduct(`?offset=${count}`));
    }
  }, []);

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

        <div className="flex flex-wrap justify-around  w-4/5 pb-[48px] sm:flex-col sm:items-center sm:gap-[15px]">
          {(cfetchstate === FETCH_STATES.fetching && <SpiningAnimation />) ||
            topCategories?.map((cat, index) => (
              <Link
                key={index}
                to={`/shopping/${
                  cat.gender === "e" ? "erkek" : "kadin"
                }/${cat.title.toLowerCase()}`}
              >
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
          <form className="flex flex-wrap gap-[15px]">
            <div class="relative h-10  min-w-[200px]">
              <input
                {...register("search")}
                type="text"
                placeholder="Search"
                class="peer w-[200px] h-[50px] rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex w-[200px] h-[50px] select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
              </label>
            </div>

            <div className="w-[200px] h-[50px]">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Category"
                    className="w-[200px] h-[50px]"
                  >
                    <Option value="">All</Option>
                    <Option value="1">T-Shirt</Option>
                    <Option value="2">Shoes</Option>
                    <Option value="3">Jacket</Option>
                    <Option value="4">Dress</Option>
                  </Select>
                )}
              />
            </div>
            <div className="w-[200px] h-[50px]">
              <Controller
                name="sort"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Sort"
                    className="w-[200px] h-[50px]"
                  >
                    <Option value="">Popularity</Option>
                    <Option value="price:asc">Price Ascending</Option>
                    <Option value="price:desc">Price Descending</Option>
                    <Option value="rating:asc">Rating Ascending</Option>
                    <Option value="rating:desc">Rating Descending</Option>
                  </Select>
                )}
              />
            </div>
            <button
              className="w-[91px] h-[50px] bg-[#23A6F0] py-[10px] px-[20px] hover:bg-light-blue-900 rounded-md"
              type="Submit"
              onClick={(e) => filterHandler(e)}
            >
              <span className="text-white text-center text-[14px] leading-6 tracking-wider">
                Filter
              </span>
            </button>
          </form>
        </div>
      </div>
      <InfiniteScroll
        className="flex flex-col items-center p-1 justify-center"
        dataLength={productlist.length}
        next={fetchedData}
        hasMore={productlist.length === productcount ? false : true}
        loader={
          <div className="flex justify-center items-center p-1">
            <SpiningAnimation wh={3} />
            {/* Loading */}
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>All products were fetched</b>
          </p>
        }
      >
        <div className=" flex flex-wrap w-4/5 justify-center gap-[30px]">
          {productlist?.map((pro, index) => (
            <ProductCard product={pro} key={index} />
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
