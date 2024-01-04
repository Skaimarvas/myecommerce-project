//Components
import ShopCard from "../components/ShopCard";
import ProductCard from "../components/productcard";
import Brands from "../components/Brands";
import InfiniteScroll from "react-infinite-scroll-component";
import SpiningAnimation from "../components/SpiningAnimation";

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
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";

export default function ProductList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("filter");
  const sort = queryParams.get("sort");
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories, cfetchstate } = useSelector((store) => store.global);
  const { productlist, productcount } = useSelector((store) => store.product);
  const { register, watch } = useForm({
    defaultValues: {
      search: search ? search : "",
      sort: sort ? sort : "",
    },
  });
  const searchValue = watch("search") ? `&filter=${watch("search")}` : "";
  const sortValue = watch("sort") ? `&sort=${watch("sort")}` : "";

  const applyFilter = (offsetValue) => {
    setCount(offsetValue);
    const queryParams = `?offset=${offsetValue}${searchValue}${sortValue}`;
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
    const queryParams = `${searchValue}${sortValue}`;
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

        <div className="flex flex-wrap justify-around  w-4/5 pb-[48px] sm:flex-col sm:items-center sm:gap-[15px] ">
          {(cfetchstate === FETCH_STATES.fetching && <SpiningAnimation />) ||
            topCategories?.map((cat, index) => (
              <Link key={index} to={`/shopping/${cat.gender}/${cat.title}`}>
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
            <label className="flex flex-row items-center gap-4">
              {" "}
              Search
              <input
                {...register("search")}
                className="flex  w-[200px] h-[50px] rounded-md bg-[#F9F9F9] px-[10px]"
                type="text"
              />
            </label>
            <label>
              <select
                {...register("sort")}
                id="filteroption"
                className="flex  w-[200px] h-[50px] rounded-md bg-[#F9F9F9] px-[10px]"
              >
                <option value="">Popularity</option>
                <option value="price:asc">Price Ascending</option>
                <option value="price:desc">Price Descending</option>
                <option value="rating:asc">Rating Ascending</option>
                <option value="rating:desc">Rating Descending</option>
              </select>
            </label>
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
        <div className=" flex flex-wrap justify-center gap-[30px]">
          {productlist?.map((pro, index) => (
            <ProductCard
              product={pro}
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
