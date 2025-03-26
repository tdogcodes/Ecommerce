"use client";
import Stripe from "stripe";
import { useState } from "react";
import { ProductCard } from "./product-card";
import useDebounce from "@/hooks/useDebounce";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [input, setInput] = useState<string>("");
  const debouncedInput = useDebounce(input, 300);

  const filteredProducts = products.filter((product) => {
    const term = debouncedInput.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;
      return(nameMatch || descriptionMatch)
  });

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search for product"
          className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="flex flex-wrap justify-center mt-6">
        {filteredProducts.map((product, i) => {
          return (
            <li key={i} className="w-60 lg:w-100 my-2 mx-2">
              <ProductCard product={product} />
            </li>
          );
        })}
        <span className="text-center text-xl text-gray-600 font-bold tracking-tight md:text-2xl my-6">
          {filteredProducts.length == 0 &&
            "We couldn't find that one, try another search"}
        </span>
      </ul>
    </div>
  );
};
