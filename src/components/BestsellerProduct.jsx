import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./productcard";

//Actions
import { FETCH_STATES } from "../store/actions/globalActions";

//Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Thunk
import { getBproduct } from "../store/thunks/productThunk";

//Components
import SpiningAnimation from "./SpiningAnimation";

export default function BestsellerProduct() {
  const { bfetchstate, bproductlist } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBproduct("?sort=rating:desc&limit=8"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-[80px] py-[80px] tracking-wider ">
      <div className="flex flex-col items-center gap-[10px] sm:px-[40px]">
        <h4 className="text-[20px] text-[#737373] leading-[30px] ">
          Featured Products
        </h4>
        <h3 className="text-2xl text-[#252B42] font-bold text-center ">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-sm text-[#737373] text-center ">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap  justify-center gap-[30px] w-4/5 sm:w-full sm:px-[10px]">
        {(bfetchstate === FETCH_STATES.fetching && <SpiningAnimation />) ||
          bproductlist?.map((pro, index) => (
            <Link
              key={index}
              to={`/shopping/${pro.category_id}/${
                pro.id
              }/${pro.name.toLowerCase()}`}
            >
              {" "}
              <ProductCard
                key={index}
                name={pro.name}
                description={pro.description}
                images={pro.images}
                price={pro.price}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
