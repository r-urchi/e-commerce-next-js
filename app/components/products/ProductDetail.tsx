import React from 'react'
import { mockData } from '@/app/data/products'
import Image from 'next/image'
import QtySelector from './QtySelector'
import GoBack from '../ui/GoBack'
import type { Item } from './ProductCard'

const ProductDetail = ({ slug }: Item) => {

  const item = mockData?.find((product: Item) => product?.slug === slug)

  return (
    <div className='max-w-4xl m-auto'>
      <GoBack className='text-sm text-blue-500 underline mb-6' />

      <section className='flex gap-6'>
        <div className='relative basis-1/2'>
          <Image
            src={`/imgs/products/${item?.image}`}
            alt={item?.title ? item?.title : 'Producto'}
            width={500}
            height={500}
          />
        </div>
        <div className='basis-1/2'>
          <h2 className='text-xl font-semibold border-b border-gray-200 pb-4 mb-4'>{item?.title}</h2>
          <p className='text-4xl'>$ {item?.price}</p>

          <QtySelector item={item} />
        </div>

      </section>

    </div>
  )
}

export default ProductDetail