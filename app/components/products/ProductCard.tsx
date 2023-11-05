import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type Product = {
  item?: Item
}

export interface Item {
  title?: string,
  description?: string,
  inStock?: number,
  price?: number,
  slug?: string | number,
  image?: string,
  type?: string
}

const ProductCard = ({ item }: Product) => {

  return (
    <article className='basis-72 shadow-lg rounded'>
      <Link
        href={`/products/detail/${item?.slug}`}
        className='flex flex-col'
      >
        <Image
          alt={item?.title ? item?.title : 'Producto'}
          src={`/img/products/${item?.image}`}
          width={288}
          height={288}
          style={{ objectFit: 'contain' }}
        />

        <div className='px-4 border-t border-gray-200'>
          <h4 className='text-sm my-4'>{item?.title}</h4>
          <p className='text-2xl font-semibold mb-6'>$ {item?.price}</p>
        </div>
      </Link>

    </article>
  )
}

export default ProductCard