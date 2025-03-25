'use client'
import React from 'react'
import Stripe from 'stripe'
import Image from 'next/image'
import { Button } from "./ui/button";
import { useCartStore } from '../store/cart-store';

interface Props {
    product: Stripe.Product
}

export const ProductDetail = ({product} : Props) => {
  const {items, addItem, removeItem} = useCartStore()
  const price = product.default_price as Stripe.Price
  const cartItem = items.find((item)=> item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1
    })
  }

  return <div className="flex mt-26 sm:flex-col md:flex-row justify-center items-center sm:gap-8 md:gap-12 p-4">
    {product.images && product.images[0] && (
          <div className="relative h-100 w-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition duration-300 hover:opacity-90"
            />
          </div>
        )}

        <div>
            <h1  className="text-3xl font-bold pb-2">{product.name}</h1>
            {product.description && <p className="text-gray-700 pb-2">{product.description}</p>}
            {price && price.unit_amount && 
            <p className='text-lg font-semibold text-gray-900 pb-2 text-center'>${(price.unit_amount! / 100).toFixed(2)}</p>}
          <div className="flex justify-center items-center gap-2">
            <Button onClick={()=> removeItem(product.id)} variant='outline'>-</Button>
            <span className="text-lg font-semibold">{quantity}</span>
            <Button onClick={onAddItem}>+</Button>
          </div>
        </div>
  </div>
}
