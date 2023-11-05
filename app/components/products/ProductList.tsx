import React from 'react'
import { mockData } from '@/app/data/products'
import ProductCard from './ProductCard'
import type { Item } from './ProductCard'

type Category = {
  category: string,
}

const ProductList = ({ category }: Category) => {

  const items = category === 'todos' ? mockData : mockData?.filter((item: Item) => item?.type === category)

  return (
    <section className='container m-auto flex justify-center items-center gap-12 flex-wrap'>
      {
        items?.map((item: any) => <ProductCard key={item?.slug} item={item} />)
      }
    </section>
  )
}

export default ProductList