import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in cart: {items.length}</p>
      <ul>
        {items.map((item, index) => (
          <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
