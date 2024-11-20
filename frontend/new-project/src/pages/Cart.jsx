import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="pt-20 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p>Quantity:</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    className="w-16 border p-1 rounded"
                  />
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 font-bold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-3 rounded mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
