"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [fading, setFading] = useState<boolean>(false);

  useEffect(() => {
     const interval = setInterval(() => {
      setFading(true);
      
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % products.length);
        setFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="relative flex justify-center shadow-md p-0 border-gray-300 sm:w-[90%] md:w-[70%] m-auto">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            layout="fill"
            className={`transition-opacity duration-500 ease-in-out object-cover rounded-lg ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center">
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {currentProduct.name}
        </CardTitle>
        {price && price.unit_amount && (
          <p className="text-xl text-white">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
};