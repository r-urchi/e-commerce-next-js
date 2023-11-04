import React from 'react'
import ProductDetail from '@/app/components/products/ProductDetail'

const DetailPage = ({ params }: any) => {
  const { slug } = params
  return (
    <main className='container m-auto mt-10'>
      <ProductDetail slug={slug} />
    </main>
  )
}

export default DetailPage