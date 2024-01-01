import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { searchItem } from "../redux/product/productSlice";
import { FetchProducts } from "../redux/product/productSlice";

export default function Header() {
  const [search, setsearch] = useState("");
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const onchange = (e) => {
    setsearch(e.target.value);
    e.preventDefault();
  };

  const onsearch = () => {
    const searchTerm = search.trim().replace(/\s/g, "");

    if (search !== " ") {
      dispatch(searchItem(searchTerm));
    } else {
      dispatch(FetchProducts());
    }

    setsearch("");
  };

  return (
    <>
      <div className="fixed top-0 z-10 flex w-full flex-row items-center justify-between border-b-4 border-gray-100 bg-slate-900 px-20 py-2 shadow-2xl sm:px-2 md:px-5">
        <Link onClick={() => dispatch(searchItem(" "))}>
          <h1 className=" py-2 text-5xl font-extrabold text-gray-100 sm:hidden">
            Mini Shop
          </h1>
          <h1 className="hidden py-2 text-lg font-bold text-gray-100 sm:block">
            MS
          </h1>
        </Link>
        <div className="flex flex-row items-center justify-between">
          <div className="">
            <input
              type="text"
              value={search}
              onChange={onchange}
              onKeyDown={(e) => {
                if (e.key === "Enter") onsearch();
              }}
              className="w-[300px] rounded-md bg-slate-700 p-2 text-sm font-medium text-gray-100 sm:w-[240px]"
              placeholder="Search Electronics, Clothes ..."
            />
            <button
              type="submit"
              className="relative right-8 top-1"
              onClick={onsearch}
            >
              <IoSearch className="text-2xl font-medium text-white hover:text-gray-400" />
            </button>
          </div>
          <Link to="#" className="flex flex-row items-center">
            <TiShoppingCart className="text-5xl text-white sm:text-4xl" />
            <h2 className=" text-2xl text-white transition-colors sm:text-xl ">
              {" "}
              ${cart}
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
}
