import React from "react";
import Store from "./Store";
import Likes from "./Likes";
import { useGlobalContext } from "../hooks/useGlobalContex";
import Cart from "./Cart";

function Navbar() {
  const { dispatch, cart } = useGlobalContext();

  // console.log(cart)
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Store cart={cart} />
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-100 shadow"
            >
              <Cart cart={cart} dispatch={dispatch} />
              {cart.length >= 1 && (
                <button className="bg-gray-200"
                  onClick={() => {
                    dispatch({ type: "DELETE_ALL" });
                  }}
                >
                  Delete All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
