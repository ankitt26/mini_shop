import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { FetchProducts } from "../redux/product/productSlice";
import { TbLoader3 } from "react-icons/tb";
import { TbFaceIdError } from "react-icons/tb";
import { addToCart } from "../redux/product/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  const { products, isLoading, error } = useSelector((state) => state.products);

  const add = (price) => {
    dispatch(addToCart(price));
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

  return (
    <div className="mt-10 flex flex-row flex-wrap items-start justify-evenly gap-y-10">
      {products.map((product) => (
        <Link to={`/`} key={product.id}>
          <div
            key={product.id}
            className="flex h-fit w-[350px] flex-col items-center justify-start rounded-md border bg-slate-50 py-6 shadow-xl"
          >
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-[170px] w-[300px] rounded-md border object-cover"
              />
              <span className="right relative bottom-52 right-8 rounded-md bg-slate-900 px-2 text-center text-sm font-medium text-white">
                {product.discountPercentage}% off
              </span>
            </div>
            <div className="flex w-full flex-col justify-start gap-2 px-6">
              <h2 className="text-wrap break-words text-xl tracking-tight text-slate-900">
                {product.title.slice(0, 30)}
              </h2>
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-3xl font-bold text-slate-900">
                  ${product.price}
                </h2>
                <div className="flex flex-row items-center justify-between">
                  <Rating value={product.rating} />
                  <p className="rounded bg-yellow-200 px-2 text-xs font-semibold text-gray-900">
                    {product.rating}
                  </p>
                </div>
              </div>
              <p className="text-sm font-bold text-slate-700">
                Stock :
                <span className="text-red-500"> {product.stock} left</span>
              </p>
              <p className="text-sm">
                {product.description.slice(0, 75)}....
                <span className="font-bold underline">more</span>
              </p>
              <button
                type="button"
                className="mt-2 flex w-full flex-row items-center justify-center rounded-lg bg-slate-900 py-3 text-sm font-medium  text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 "
                onClick={() => add(product.price)}
              >
                <MdShoppingCart className="mr-2 text-xl  font-medium text-white" />

                <span> Add to cart</span>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
