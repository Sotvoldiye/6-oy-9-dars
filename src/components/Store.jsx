import React from 'react'
import Shopping from './Shopping'

function Store({cart}) {
  return (
    <div
    tabIndex={0}
    role="button"
    className="btn btn-ghost btn-circle"
  >
    <div className="indicator">
    <Shopping/>
      <span className="badge badge-sm indicator-item">
        {cart.length}
      </span>
    </div>
  </div>
  )
}

export default Store