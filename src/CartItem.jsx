
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="page-container">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <div>
          <p>Your cart is empty. Explore our plants and add your favourites!</p>
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <h3>Total Items: {totalQuantity}</h3>

          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div>
                <button
                  onClick={() => handleDecrease(item)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span style={{ margin: "0 12px" }}>
                  {item.quantity}
                </span>

                <button onClick={() => handleIncrease(item)}>
                  +
                </button>
              </div>

              <button onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          ))}

          <h2 className="cart-total">
            Total: ${total.toFixed(2)}
          </h2>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>

          <button
            onClick={handleCheckout}
            style={{ marginLeft: "12px" }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;
