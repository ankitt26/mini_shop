import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
export default function () {
  return (
    <>
      <div className="fixed top-0 z-10 flex w-full flex-row items-center justify-between border-b-4 border-gray-100 bg-slate-900 px-20 py-2 shadow-2xl">
        <Link to="/">
          <h1 className=" py-2 text-5xl font-extrabold text-gray-100">
            Mini Shop
          </h1>
        </Link>
        <Link to="#">
          <TiShoppingCart className="text-5xl text-white" />
        </Link>
      </div>
    </>
  );
}
