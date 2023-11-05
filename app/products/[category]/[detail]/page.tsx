import React from 'react'
import ProductDetail from '@/app/components/products/ProductDetail'
import type { ParamsCategory } from '../page'


const DetailPage = ({ params }: ParamsCategory) => {

  const { detail } = params

  return (
    <main className='container m-auto mt-10'>
      <ProductDetail slug={detail} />
    </main>
  )
}

export default DetailPage