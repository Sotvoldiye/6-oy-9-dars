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
    
    <div>
      <div className="container">
        <Navbar />
        {phone && <Products phone={phone} isPending={isPending} />}
      </div>
    </div>
  );
}

export default App;
