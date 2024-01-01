import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FetchProducts } from "../redux/product/productSlice";
import { TbLoader3 } from "react-icons/tb";
import { TbFaceIdError } from "react-icons/tb";
import { addToCart } from "../redux/product/productSlice";
import { CiFilter } from "react-icons/ci";
import Filter from "./filter";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  const { products, searchedItem, isLoading, error } = useSelector(
    (state) => state.products,
  );

  let items;
  if (searchedItem.length === 0) {
    items = products;
  } else {
    items = searchedItem;
  }

  const add = (price) => {
    dispatch(addToCart(price));
  };

  const showfilters = () => {
    const popup = document.getElementById("filter_pop");
    popup.classList.add("animate-slideFromLeft");
    popup.classList.remove("animate-slideFromRight");
    popup.classList.remove("hidden");
  };

  if (isLoading) {
    return (
      <div className=" absolute left-[47.5%] top-[47.5%]">
        <TbLoader3 className="animate-spin text-8xl font-bold text-slate-700" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="top-40 flex h-[70vh] flex-col items-center justify-center text-center">
        <TbFaceIdError className="animate-pulse text-8xl font-bold text-slate-700" />
        <p className="text-2xl">⚠️ Something went wrong. Please try again❗</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="top-40 flex h-[70vh] flex-col items-center justify-center text-center">
        <TbFaceIdError className="animate-pulse text-8xl font-bold text-slate-700" />
        <p className="text-2xl">⚠️ No Product Found</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-28 flex flex-row items-center justify-between px-[2%] sm:mt-20 sm:items-start sm:justify-center">
        <button
          className="mr-20 flex h-fit w-fit cursor-pointer flex-row items-center justify-center rounded-md bg-slate-800 px-2 py-1 text-sm font-medium text-white shadow-xl hover:bg-slate-700"
          onClick={showfilters}
        >
          <CiFilter className="text-2xl" />
          <span>filter</span>
        </button>
        <p className="text-center text-xl font-medium sm:text-sm">
          {" "}
          Discover Endless Choices: Your One-Stop Shop for Quality Products at
          Unbeatable Prices
        </p>
        <div></div>
      </div>

      <Filter />

      <div className="mt-10 flex flex-row flex-wrap items-start justify-evenly gap-y-10">
        {items.map((item) => (
          <Link to={`/`} key={item.id}>
            <div
              key={item.id}
              className="animate-slideFromTop flex h-fit w-[350px] flex-col items-center justify-start rounded-md border bg-slate-50 py-6 shadow-xl"
            >
              <div>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-[170px] w-[300px] rounded-md border object-cover"
                />
                <span className="right relative bottom-52 right-8 rounded-md bg-slate-900 px-2 text-center text-sm font-medium text-white">
                  {item.discountPercentage}% off
                </span>
              </div>
              <div className="flex w-full flex-col justify-start gap-2 px-6">
                <h2 className="text-wrap break-words text-xl tracking-tight text-slate-900">
                  {item.title.slice(0, 30)}
                </h2>
                <div className="flex flex-row items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-900">
                    ${item.price}
                  </h2>
                  <div className="flex flex-row items-center justify-between">
                    <Rating value={item.rating} />
                    <p className="rounded bg-yellow-200 px-2 text-xs font-semibold text-gray-900">
                      {item.rating}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-700">
                  Stock :
                  <span className="text-red-500"> {item.stock} left</span>
                </p>
                <p className="text-sm">
                  {item.description.slice(0, 75)}....
                  <span className="font-bold underline">more</span>
                </p>
                <button
                  type="button"
                  className="mt-2 flex w-full flex-row items-center justify-center rounded-lg bg-slate-900 py-3 text-sm font-medium  text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 "
                  onClick={() => add(item.price)}
                >
                  <MdShoppingCart className="mr-2 text-xl  font-medium text-white" />

                  <span> Add to cart</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
