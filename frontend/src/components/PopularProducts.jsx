import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap');
  .font-cormorant { font-family: 'Cormorant Garamond', serif; }
  .font-outfit    { font-family: 'Outfit', sans-serif; }
  @keyframes pp-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
  .pp-skel-img { background:linear-gradient(90deg,#f0ebe2 25%,#ece6db 50%,#f0ebe2 75%); background-size:200% 100%; animation:pp-shimmer 1.6s infinite; }
  .pp-skel-line { background:linear-gradient(90deg,#f0ebe2 25%,#ece6db 50%,#f0ebe2 75%); background-size:200% 100%; animation:pp-shimmer 1.6s infinite; border-radius:2px; height:10px; }
  .pp-viewmore { position:relative; border-bottom:1px solid #d4af37; transition:color .3s,letter-spacing .3s; }
  .pp-viewmore::after { content:''; position:absolute; bottom:-1px; left:0; width:0%; height:1px; background:#0a0a0a; transition:width .4s ease; }
  .pp-viewmore:hover::after { width:100%; }
  .pp-viewmore:hover { color:#0a0a0a; }
`;

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/popular")
      .then((r) => r.json())
      .then((d) => { setProducts(Array.isArray(d) ? d : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section className="font-outfit py-24 bg-[#faf7f2] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none"
          style={{background:"radial-gradient(ellipse 500px 400px at 10% 20%, rgba(212,175,55,0.05) 0%, transparent 60%)"}}/>
        <div className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none"
          style={{background:"radial-gradient(ellipse 400px 350px at 90% 80%, rgba(212,175,55,0.04) 0%, transparent 60%)"}}/>

        <div className="max-w-[1400px] mx-auto px-8 relative z-10">

          {/* Header */}
          <header className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <div className="flex flex-col">
              <span className="font-outfit text-[10px] font-medium tracking-[0.35em] uppercase text-[#d4af37] mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-[#d4af37] flex-shrink-0"/>
                Bestsellers
              </span>
              <h2 className="font-cormorant text-[clamp(40px,5vw,62px)] font-light text-[#1a1a1a] leading-none tracking-tight m-0">
                Popular{" "}
                <em className="italic text-[#d4af37] font-light">Picks</em>
                {!loading && products.length > 0 && (
                  <span className="inline-flex items-center justify-center w-9 h-9 border border-[#d4af37] font-outfit text-[11px] font-medium text-[#d4af37] ml-3 rounded-sm align-middle relative -top-1.5">
                    {products.length}
                  </span>
                )}
              </h2>
            </div>
            <a href="/products"
              className="pp-viewmore inline-flex items-center gap-3 pb-2 bg-transparent border-none font-outfit text-[11px] font-medium tracking-[0.22em] uppercase text-[#1a1a1a] cursor-pointer no-underline flex-shrink-0">
              View All
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M11 1L15 5M15 5L11 9M15 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </header>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#e8e2d9]">
            {loading ? (
              Array.from({length:4}).map((_,i) => (
                <div key={i} className="bg-white flex flex-col">
                  <div className="pp-skel-img" style={{aspectRatio:"3/4"}}/>
                  <div className="p-4 flex flex-col gap-2.5">
                    <div className="pp-skel-line" style={{width:"40%"}}/>
                    <div className="pp-skel-line" style={{width:"80%"}}/>
                    <div className="pp-skel-line" style={{width:"50%"}}/>
                  </div>
                </div>
              ))
            ) : products.length === 0 ? (
              <div className="col-span-4 py-20 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-[#d4af37] rounded-sm mb-5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.4 7.2L18 8.2L14 12.1L15 17.7L10 15L5 17.7L6 12.1L2 8.2L7.6 7.2L10 2Z"
                      stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-cormorant text-[22px] font-light text-[#999]">No popular products found</p>
              </div>
            ) : (
              products.map((product, i) => (
                <ProductCard key={product._id} product={product} index={i}/>
              ))
            )}
          </div>

          {/* Footer ornament */}
          <div className="flex items-center gap-6 mt-14">
            <div className="flex-1 h-px" style={{background:"linear-gradient(90deg,#d4af37,rgba(212,175,55,0.1))"}}/>
            <div className="w-1.5 h-1.5 border border-[#d4af37] rotate-45 flex-shrink-0"/>
            <span className="font-outfit text-[10px] font-normal tracking-[0.25em] uppercase text-[#c4a832] whitespace-nowrap">
              Handpicked for you
            </span>
            <div className="w-1.5 h-1.5 border border-[#d4af37] rotate-45 flex-shrink-0"/>
            <div className="flex-1 h-px" style={{background:"linear-gradient(90deg,rgba(212,175,55,0.1),#d4af37)"}}/>
          </div>

        </div>
      </section>
    </>
  );
};
export default PopularProducts;