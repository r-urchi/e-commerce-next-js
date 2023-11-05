'use client'
import React, { useState } from 'react'
import Counter from '../ui/Counter'
import Button from '../ui/Button'
import type { Product } from './ProductCard'

const QtySelector = ({ item }: Product) => {

  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    console.log({
      ...item,
      quantity
    })
  }

  return (
    <div className='flex flex-col gap-5 mt-6'>
      <Counter max={item?.inStock} counter={quantity} setCounter={setQuantity} />
      <Button className='w-full hover:bg-blue-600' onClick={handleAdd}>Agregar al carrito</Button>
    </div>
  )
}

export default QtySelector