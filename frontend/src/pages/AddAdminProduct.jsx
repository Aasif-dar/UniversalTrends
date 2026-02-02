import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import adminCategories from "../data/adminCategories";

const AdminAddProduct = () => {
  const { user } = useAuth();
  const [isPopular, setIsPopular] = useState(false);
  const [type, setType] = useState(""); // men | women | fragrances
  const [category, setCategory] = useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    if (!type || !category) {
      alert("Please select product type and category");
      return;
    }

    const payload = {
  ...form,
  category,
  type,
  isPopular,
};


    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(payload),
    });

    alert("Product added successfully");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-6 border rounded-lg">

        <h1 className="text-2xl font-semibold mb-6">
          Add Product
        </h1>

        <form onSubmit={submit} className="space-y-4">

          {/* PRODUCT TYPE */}
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setCategory("");
            }}
            className="border w-full px-3 py-2"
            required
          >
            <option value="">Select Product Type</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="fragrances">Fragrances</option>
          </select>

          {/* CATEGORY (DYNAMIC) */}
          {type && (
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border w-full px-3 py-2"
              required
            >
              <option value="">Select Category</option>
              {adminCategories[type].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          )}

          {/* PRODUCT NAME */}
          <input
            type="text"
            placeholder="Product Name"
            className="border w-full px-3 py-2"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          {/* PRICE */}
          <input
            type="number"
            placeholder="Price"
            className="border w-full px-3 py-2"
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            required
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Product Description"
            className="border w-full px-3 py-2"
            rows="4"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 hover:bg-gray-800 transition"
          >
            Add Product
          </button>
          <label className="flex items-center gap-2 text-sm">
          <input type="checkbox"
          checked={isPopular}
        onChange={(e) => setIsPopular(e.target.checked)}/>
         Mark as Popular Product
         </label>


        </form>

      </div>
    </section>
  );
};

export default AdminAddProduct;