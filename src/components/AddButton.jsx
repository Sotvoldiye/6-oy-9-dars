import React from 'react'

function AddButton({p,dispatch}) {
  return (
    <button
    className="btn btn-square btn-ghost"
    onClick={() => {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...p, amount: 1 },
      });
    }}
  >
    <i className="fa-solid fa-cart-shopping"></i>
  </button>
  )
}

export default AddButton