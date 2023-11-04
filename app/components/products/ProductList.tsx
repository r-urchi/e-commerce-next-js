import React from 'react'
import { mockData } from '@/app/data/products'
import ProductCard from './ProductCard'

const ProductList = ({category}: any) => {

  const items = category === 'todos' ? mockData : mockData?.filter((item: any) => item?.type === category)
  return (
    <section className='container m-auto flex justify-center items-center gap-12 flex-wrap'>
      {
        items?.map((item: any) => <ProductCard key={item?.slug} item={item}/>)
      }
    </section>
  )
}

export default ProductList