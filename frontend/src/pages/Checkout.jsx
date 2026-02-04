import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: "",
    address: "",
    state: "",
    payment: "cod",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharge =
    form.state.toLowerCase() === "kashmir" ? 100 : 500;

  const total = subtotal + deliveryCharge;

  const placeOrder = async () => {
    if (!form.phone || !form.address || !form.state) {
      alert("Please fill all details");
      return;
    }

    const res = await fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        items: cart,
        total,
        address: form.address,
        phone: form.phone,
        paymentMethod: form.payment,
        deliveryCharge,
      }),
    });

    if (!res.ok) {
      alert("Order failed");
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">

        {/* LEFT – FORM */}
        <div className="bg-white p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-6">
            Delivery Details
          </h2>

          <input
            placeholder="Phone Number"
            className="border w-full px-3 py-2 mb-4"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Full Address"
            className="border w-full px-3 py-2 mb-4"
            rows="3"
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
          />

          <input
            placeholder="State (e.g. Kashmir)"
            className="border w-full px-3 py-2 mb-4"
            onChange={(e) =>
              setForm({ ...form, state: e.target.value })
            }
          />

          <h3 className="font-medium mb-2">
            Payment Method
          </h3>

          <label className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              checked={form.payment === "cod"}
              onChange={() =>
                setForm({ ...form, payment: "cod" })
              }
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input type="radio" disabled />
            Online Payment (Coming Soon)
          </label>
        </div>

        {/* RIGHT – SUMMARY */}
        <div className="bg-white p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-3"
          >
            Place Order
          </button>
        </div>

      </div>
    </section>
  );
};

export default Checkout;
