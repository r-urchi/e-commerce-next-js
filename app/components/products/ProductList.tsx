import React from 'react'
import { mockData } from '@/app/data/products'
import ProductCard from './ProductCard'
import type { Item } from './ProductCard'

type Category = {
  category: string,
}

const ProductList = ({ category }: Category) => {

  const items = category === 'all' ? mockData : mockData?.filter((item: Item) => item?.type === category)

  return (
    <div className='flex flex-col w-full'>
      <p className='flex justify-end mt-4 mb-8'>Cantidad de productos: {items?.length.toString()}</p>
      {
        items?.length === 0 ? <p className='m-auto'>No se encontraron productos</p>
          :
          <section className='container m-auto flex justify-center items-center gap-12 flex-wrap '>
            {
              items?.map((item: any) => <ProductCard key={item?.slug} item={item} />)
            }
          </section>
      }
    </div>
  )
}

export default ProductList