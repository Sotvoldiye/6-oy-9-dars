import React from "react";

function Button({ p, dispatch, alreadyAdded }) {
  return (
    <div className="">
      <div className="add-to-card-btn-d-i add-to-card-btn-wrapper flex items-center gap-2">
        <button
          className="button-icon decrement "
          onClick={() => {
            if (alreadyAdded.amount == 1) {
              dispatch({ type: "DELETE", payload: p.id });
            } else {
              dispatch({ type: "DECREMENT", payload: p.id });
            }
          }}
        >
          <i className="fa-solid fa-square-minus fa-xl rounded-md m-0 bg-gray-200"></i>
          <div className=""></div>
        </button>
        <p>{alreadyAdded.amount}</p>
        <button
          className="button-icon increment"
          onClick={() => dispatch({ type: "INCREMENT", payload: p.id })}
        >
          <i className="fa-solid fa-plus fa-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default Button;
