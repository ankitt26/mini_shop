import Header from "./Header";
import Products from "./products";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-28">
        <p className="mt-5 text-center font-medium">
          {" "}
          Discover Endless Choices: Your One-Stop Shop for Quality Products at
          Unbeatable Prices
        </p>
      </div>
      <Products />
    </>
  );
}
