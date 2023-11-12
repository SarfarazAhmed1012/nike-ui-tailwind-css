import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className=" blue-gradient">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top quality products and style with our branded selections.
          And Discover the world full of style, comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            imgUrl={product.imgURL}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
