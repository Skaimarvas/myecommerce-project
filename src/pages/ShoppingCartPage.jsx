//Actions
import {
  decreaseProduct,
  deleteProduct,
  increaseProduct,
} from "../store/actions/shoppingCartActions";
//Icons
import { Icon } from "@iconify/react";
import free from "../assets/productcard/free.png";
//Hooks
import { useDispatch, useSelector } from "react-redux";
//Components
import Checkbox from "../components/Checkbox";
import OrderSummoryBox from "../components/OrderSummoryBox";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.shopping);

  return (
    <div className="flex items-center p-2 bg-gray-100">
      <div className="flex flex-wrap justify-center gap-5 w-full ">
        <div className="flex flex-col gap-5 w-4/6 ">
          <div className="flex justify-between bg-white  px-10 py-5 rounded shadow-md  ">
            <h3 className="text-2xl font-bold uppercase">
              My Cart ({cart.length})
            </h3>
            <div className="flex flex-row justify-between items-center gap-2">
              <span className="text-sm">
                Free shipping on orders over $100!
              </span>
              <img src={free} alt="" className="w-10 h-10" />
            </div>
          </div>
          {cart.map((car) => (
            <>
              <div
                key={car.product.id}
                className="flex flex-wrap justify-between items-center px-8 py-5  gap-2 bg-white rounded-md shadow-md border border-gray-400"
              >
                <div>
                  <form>
                    <Checkbox checked={car.checked} id={car.product.id} />
                  </form>
                </div>
                <img
                  src={car.product.images[0].url}
                  className="w-[100px] h-[150px]  rounded border border-gray-600 object-cover object-top "
                  alt=""
                />

                <div className="flex flex-col justify-center items-start w-[350px] ">
                  <span className="text-normal text-left font-bold">
                    {" "}
                    {car.product.name}{" "}
                  </span>
                  <div
                    title={car.product.description}
                    className="flex flex-col items-start h-[40px]  overflow-hidden"
                  >
                    <span className="text-sm text-left">
                      {" "}
                      {car.product.description}{" "}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-row items-center  ">
                    <button
                      onClick={() => dispatch(decreaseProduct(car.product.id))}
                      className="px-5 py-1 bg-blue-700 hover:bg-blue-400 rounded shadow  "
                    >
                      {" "}
                      <div className="flex justify-center items-center ">
                        <span className="text-white">-</span>{" "}
                      </div>
                    </button>
                    <div className="flex justify-center items-center border border-gray-300  px-4 py-1 w-12 ">
                      <span className="text-normal"> {car.count} </span>{" "}
                    </div>
                    <button
                      onClick={() => dispatch(increaseProduct(car.product.id))}
                      className="px-5 py-1 bg-blue-700 hover:bg-blue-400 rounded shadow"
                    >
                      {" "}
                      <div className="flex justify-center items-center ">
                        <span className="text-white">+</span>{" "}
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row justify-center w-24">
                    <span className="text-normal">
                      {" "}
                      ${(car.product.price * car.count).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center">
                    <button
                      className=" bg-blue-700  hover:bg-blue-400 px-5 py-2 rounded"
                      onClick={() => dispatch(deleteProduct(car.product.id))}
                    >
                      <Icon
                        icon="ri:delete-bin-line"
                        className="text-normal text-white  "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <OrderSummoryBox />
      </div>
    </div>
  );
}
