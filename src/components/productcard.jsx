import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
//Hooks
import { useDispatch } from "react-redux";
//Actions
import { addProductToCart } from "../store/actions/shoppingCartActions";
//Icons and Pngs
import bestseller from "../assets/productcard/bseller.png";
import free from "../assets/productcard/free.png";

export default function ProductCard(props) {
  const { product } = props;
  const { description, name, price, images, sell_count, rating } = product;
  const dispatch = useDispatch();

  const addCart = (e) => {
    e.preventDefault();
    const cartProduct = {
      count: 1,
      checked: true,
      product,
    };
    dispatch(addProductToCart(cartProduct));
    toast.success("Product Added to Cart");
  };

  return (
    <div className="flex flex-col sm:w-[350px] w-[239px] shadow-lg transition-transform hover:scale-[1.05]">
      <div className="relative">
        <img
          src={images[0].url}
          alt="bs image 1"
          className=" h-[427px] w-full object-cover"
        />
        {price > 100 && (
          <img
            src={free}
            className="absolute inset-x-[4%] inset-y-[4%] w-9 h-9 inset"
            alt=""
          />
        )}
        {sell_count > 500 && (
          <img
            src={bestseller}
            className="absolute inset-x-[80%] inset-y-[4%] w-9 h-9"
            alt=""
          />
        )}
      </div>
      <div className="flex flex-col items-center gap-[10px] p-[25px]">
        <h5 className="text-center text-[#252B42] text-base font-bold truncate ">
          {name}
        </h5>
        <div className="h-5 w-full ">
          <h4
            className="text-center text-[#737373] text-[14px] leading-6  font-bold truncate"
            title={description}
          >
            {description}
          </h4>{" "}
        </div>
        <div className="flex flex-row gap-[5px] px-[3px] py-[5px]">
          <span className="text-[#BDBDBD] text-center text-base font-bold ">
            ${price}
          </span>
          <span className="text-[#23856D] text-center text-base font-bold ">
            ${price}
          </span>
        </div>
        <div className="flex flex-row gap-[6.077px]">
          <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
          <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
        </div>
        <div className="flex flex-row gap-1">
          <button
            onClick={(e) => addCart(e)}
            className="py-2 px-2 bg-blue-400 hover:bg-blue-700 rounded-md shadow-lg"
          >
            <span className="text-white text-sm">Add Cart</span>
          </button>
          <Link
            to={`/shopping/${
              product?.category_id === 1
                ? "t-shirt"
                : 2
                ? "ayakkabı"
                : 3
                ? "ceket"
                : 4
                ? "elbise"
                : ""
            }/${product?.id}/${product?.name
              .replaceAll(" ", "-")
              .toLowerCase()}`}
          >
            <button
              onClick={(e) => preventDefault()}
              className="py-2 px-2 bg-blue-400 hover:bg-blue-700 rounded-md shadow-lg"
            >
              <span className="text-white text-sm">View Product</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
