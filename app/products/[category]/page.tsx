import React, { Suspense } from 'react'
import CategoriesMenu from '@/app/components/products/CategoriesMenu'
import ProductList from '@/app/components/products/ProductList'

export async function generateMetadata({ params, searchParams }: any, parent: any) {
  return {
    title: `Capellari - ${params?.category}`
  }
}

export function generateStaticParams() {
  return [
    { category: 'all' },
    { category: 'tvs' },
    { category: 'aires' },
    { category: 'hornos' }
  ]
}

export const revalidate = 3600

export type ParamsCategory = {
  params: Category
}
export interface Category {
  category: string
  detail: string
}

const Products = ({ params }: ParamsCategory) => {

  const { category } = params

  return (
    <main className='container m-auto min-h-screen'>
      <h2 className='text-2xl my-10 border-b pb-4'>Productos</h2>
      <div className='flex gap-10'>
        <CategoriesMenu />
        {/* <Suspense fallback={<div>Cargando...</div>}> */}
        <ProductList category={category} />
        {/* </Suspense> */}
      </div>
    </main>
  )
}

export default Products