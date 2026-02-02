// const Men = () => {
//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Page Title */}
//         <h1 className="text-3xl font-semibold mb-8">
//           Men
//         </h1>

//         {/* Filters */}
//         <div className="flex gap-4 mb-10 text-sm">
//           {["Shirts", "T-Shirts", "Shoes", "Suits"].map((filter) => (
//             <button
//               key={filter}
//               className="border px-4 py-2 hover:bg-black hover:text-white transition"
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {/* Reuse ProductCard here later */}
//           <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
//             Product
//           </div>
//           <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
//             Product
//           </div>
//           <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
//             Product
//           </div>
//           <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
//             Product
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Men;


// import { useState } from "react";
// import menProducts from "../data/MensProduct";
// import ProductCard from "../components/ProductCard";

// const categories = [
//   "All",
//   "Shirts",
//   "Tshirts",
//   "Jackets",
//   "Jeans",
//   "Uppers",
//   "Shorts",
//   "Shoes",
//   "Accessories",
// ];

// const Men = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProducts =
//     activeCategory === "All"
//       ? menProducts
//       : menProducts.filter(
//           (item) => item.category === activeCategory
//         );

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Page Title */}
//         <h1 className="text-3xl font-semibold mb-10">
//           Men
//         </h1>

//         {/* Categories Filter */}
//         <div className="flex flex-wrap gap-3 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 text-sm border transition
//                 ${
//                   activeCategory === cat
//                     ? "bg-black text-white"
//                     : "bg-white text-black hover:bg-black hover:text-white"
//                 }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Men;


// import { useState } from "react";
// import menProducts from "../data/MensProduct";
// import ProductCard from "../components/ProductCard";

// const categories = [
//   "All",
//   "Shirts",
//   "Tshirts",
//   "Jackets",
//   "Jeans",
//   "Hoodies",
//   "Sweatshirts",
//   "Shorts",
//   "Shoes",
//   "Accessories",
// ];

// const Men = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProducts =
//     activeCategory === "All"
//       ? menProducts
//       : menProducts.filter(
//           (item) => item.category === activeCategory
//         );

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="mb-12">
//           <p className="text-sm text-gray-500 mb-2">
//             Home / Men
//           </p>
//           <h1 className="text-3xl font-semibold">
//             Men
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           {/* SIDEBAR */}
//           <aside className="md:col-span-1 bg-white p-6 rounded-lg border shadow-sm h-fit sticky top-24">
//             <h3 className="text-lg font-medium mb-6">
//               Categories
//             </h3>

//             <ul className="space-y-2 text-sm">
//               {categories.map((cat) => (
//                 <li
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className={`cursor-pointer px-3 py-2 rounded transition
//                     ${
//                       activeCategory === cat
//                         ? "bg-black text-white"
//                         : "hover:bg-gray-100 text-gray-700"
//                     }`}
//                 >
//                   {cat}
//                 </li>
//               ))}
//             </ul>
//           </aside>

//           {/* PRODUCTS */}
//           <div className="md:col-span-3">

//             {/* Sort / Count */}
//             <div className="flex items-center justify-between mb-8">
//               <p className="text-sm text-gray-600">
//                 Showing {filteredProducts.length} products
//               </p>

//               <select className="border px-3 py-2 text-sm outline-none">
//                 <option>Sort by</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Newest</option>
//               </select>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
//               {filteredProducts.map((product) => (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                 />
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Men;


// import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
// import menProducts from "../data/MensProduct";
// import ProductCard from "../components/ProductCard";
// import CategorySidebar from "../components/CategorySidebar";
// import SortBar from "../components/SortBar";
// import Footer from "../components/Footer";

// const categories = [
//   "All",
//   "Shirts",
//   "Tshirts",
//   "Jackets",
//   "Jeans",
//   "Uppers",
//   "Shorts",
//   "Shoes",
//   "Accessories",
// ];

// const sortProducts = (products, sort) => {
//   if (sort === "priceLowHigh") return [...products].sort((a, b) => a.price - b.price);
//   if (sort === "priceHighLow") return [...products].sort((a, b) => b.price - a.price);
//   if (sort === "nameAZ") return [...products].sort((a, b) => a.name.localeCompare(b.name));
//   return products;
// };

// const Men = () => {
//   const [params, setParams] = useSearchParams();
//   const [sort, setSort] = useState("default");

//   const activeCategory = params.get("category") || "All";

//   const filtered =
//     activeCategory === "All"
//       ? menProducts
//       : menProducts.filter(p => p.category === activeCategory);

//   const sortedProducts = sortProducts(filtered, sort);

//   return (
//     <div>
//     <section className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="mb-12">
//           <p className="text-sm text-gray-500">Home / Men</p>
//           <h1 className="text-3xl font-semibold">Men</h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           <CategorySidebar
//             categories={categories}
//             active={activeCategory}
//             onChange={(cat) => setParams({ category: cat })}
//           />

//           <div className="md:col-span-3">

//             <SortBar
//               count={sortedProducts.length}
//               sortValue={sort}
//               onSortChange={setSort}
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
//               {sortedProducts.map(product => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//     <Footer/>
//     </div>

//   );
// };

// export default Men;


import { useState } from "react";
import menProducts from "../data/MensProduct";
import ProductCard from "../components/ProductCard";
import CategorySidebar from "../components/CategorySidebar";
import SortBar from "../components/SortBar";
import MobileFilterDrawer from "../components/MobileFilterDrawer";
import {ChevronUp} from "lucide-react"
import Footer from "../components/Footer";
const categories = [
  "All",
  "Shirts",
  "Tshirts",
  "Jackets",
  "Jeans",
  "Uppers",
  "Shorts",
  "Shoes",
  "Accessories",
];

const sortProducts = (products, sort) => {
  if (sort === "priceLowHigh") return [...products].sort((a, b) => a.price - b.price);
  if (sort === "priceHighLow") return [...products].sort((a, b) => b.price - a.price);
  if (sort === "nameAZ") return [...products].sort((a, b) => a.name.localeCompare(b.name));
  return products;
};

const Men = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  const filtered =
    activeCategory === "All"
      ? menProducts
      : menProducts.filter((p) => p.category === activeCategory);

  const sortedProducts = sortProducts(filtered, sort);

  return (
    <div>
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Home / Men</p>
          <h1 className="text-3xl font-semibold">Men</h1>
        </div>

        {/* Mobile Filter Button */}
        <div className="flex justify-between items-center  md:hidden mb-6" >
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="border px-4 py-2 text-sm flex items-center"
          >
           <span className="font-bold">Filter:</span> {activeCategory}
          </button>

          <SortBar
            count={sortedProducts.length}
            sortValue={sort}
            onSortChange={setSort}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Desktop Sidebar ONLY */}
          <div className="hidden md:block">
            <CategorySidebar
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Products */}
          <div className="md:col-span-3">

            {/* Desktop Sort */}
            <div className="hidden md:block">
              <SortBar
                count={sortedProducts.length}
                sortValue={sort}
                onSortChange={setSort}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        <MobileFilterDrawer
          open={mobileFilterOpen}
          onClose={() => setMobileFilterOpen(false)}
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Men;


