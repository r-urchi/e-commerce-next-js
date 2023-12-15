import React from 'react'
import ProductCard from './ProductCard'

type Category = {
  category: string,
}

const ProductList = async ({ category }: Category) => {

  const items = await fetch(`http://localhost:3000/api/products/${category}`, { 
    cache: 'no-cache',
    next: {
      tags: ['products']
    }
  })
  .then((res: any) => res?.json())

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