import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="page-container">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty. Explore our plants and add your favourites!</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Your Shopping Cart</h1>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity - 1
                })
              )
            }
            disabled={item.quantity <= 1}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: item.quantity + 1
                })
              )
            }
          >
            +
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <p className="cart-total">
        Total: ${total.toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;
