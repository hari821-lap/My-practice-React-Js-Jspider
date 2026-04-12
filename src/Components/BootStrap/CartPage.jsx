// src/pages/CartPage.js
import React from "react";
import { useCart } from "./CardContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQty } = useCart();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty</p> : (
        <>
          <ul className="list-group mb-3">
            {cart.map(i => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={i.id}>
                <div>
                  <strong>{i.name}</strong>
                  <div className="text-muted small">₹{i.price} each</div>
                </div>
                <div className="d-flex align-items-center">
                  <input type="number" min="1" value={i.qty} onChange={(e) => updateQty(i.id, Number(e.target.value))} style={{ width: 60 }} />
                  <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(i.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>
          <button className="btn btn-success">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
