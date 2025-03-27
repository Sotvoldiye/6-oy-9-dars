import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: phone,
    isPending,
    error,
  } = useFetch("https://json-api.uz/api/project/products-e/products");

  return (
    <div className="container flex flex-col max-w-[1260px] w-full">
      <Navbar />

      <div className="ml-auto mr-auto">
        {phone && <Products phone={phone} isPending={isPending} />}
      </div>
    </div>
  );
}

export default App;
