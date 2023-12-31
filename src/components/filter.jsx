import { useState } from "react";
import { useDispatch } from "react-redux";
import { priceFilter } from "../redux/product/productSlice";
export default function Filter() {
  const [minval, setminval] = useState(0);
  const [maxval, setmaxval] = useState(1000);
  const dispatch = useDispatch();
  const filterbyPrice = () => {
    dispatch(priceFilter([minval, maxval]));

    const popup = document.getElementById("filter_pop");
    popup.classList.toggle("hidden");
  };
  return (
    <>
      <div
        className="fixed top-0 z-[9] flex hidden h-screen w-[350px] flex-col justify-between rounded-md bg-white p-3 shadow-2xl"
        id="filter_pop"
      >
        <div>
          <h3 className="mt-20 bg-slate-900 text-center text-xl font-semibold text-white">
            Filters
          </h3>
          <h4 className=" mt-2 text-lg font-semibold">Price </h4>
          <hr />
          <div className="mt-2 flex flex-row items-center justify-center gap-4">
            <label htmlFor="min" className="w-1/6">
              Min -
            </label>
            <input
              type="number"
              placeholder="00"
              value={minval}
              onChange={(e) => setminval(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") filterbyPrice();
              }}
              className=" w-1/3 appearance-none rounded-md border-2 pl-2"
            />
            <label htmlFor="max" className="w-1/6">
              Max -
            </label>
            <input
              type="number"
              placeholder="1000"
              value={maxval}
              onChange={(e) => setmaxval(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") filterbyPrice();
              }}
              className=" w-1/3 rounded-md border-2 pl-2"
            />
          </div>
        </div>
        <button
          className="me-2 w-full rounded-lg border-2 border-green-500 bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 "
          onClick={filterbyPrice}
        >
          Apply
        </button>
      </div>
    </>
  );
}
