import React from 'react'

function Cart({cart, dispatch}) {

  return (
    <div className="card-body">
    <span className="text-lg font-bold">{cart.length} Items</span>

    <span className="text-info">
      Subtotal: $
      {cart.reduce((total, p) => total + p.price * p.amount, 0)}
    </span>
    {cart.map((p, index) => (
      <div key={index} className="flex items-center justify-between">
        <div className="flex items-center gap-1 ">
        <img className="w-[40px]" src={p.image} alt="" />
        <div className="flex flex-col items-start">
        <p>{p.title}</p>
        <p>${p.price}</p>
        </div>
      </div>
      <button onClick={()=>   dispatch({ type: "DELETE", payload: p.id})}>
      <i className="fa-solid fa-delete-left fa-xl"></i>
      </button>
      </div>
    ))}
  
  </div>
  )
}

export default Cart