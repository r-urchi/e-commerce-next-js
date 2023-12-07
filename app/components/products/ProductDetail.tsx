import React from 'react'
import Image from 'next/image'
import QtySelector from './QtySelector'
import GoBack from '../ui/GoBack'
import type { Item } from './ProductCard'

const ProductDetail = async ({ slug }: Item) => {

  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    // cache: 'no-store',
    next: {
      revalidate: 0
    }
  })
    .then(res => res.json())

  return (
    <div className='max-w-4xl m-auto'>
      <GoBack className='text-sm underline mb-6' />

      <section className='flex gap-6'>
        <div className='relative basis-1/2'>
          <Image
            src={item?.image}
            alt={item?.title ? item?.title : 'Producto'}
            width={500}
            height={500}
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='text-xl font-semibold border-b border-gray-200 pb-4 mb-4'>{item?.title}</h2>
          <p className='text-4xl'>$ {new Intl.NumberFormat('es-ar').format(Number(item?.price))}</p>

          {
            item?.inStock === 0 ?
              <></> :
              <QtySelector item={item} />
          }
        </div>

      </section>

    </div>
  )
}

export default ProductDetail