import React from 'react';
import ProductCard from './ProductCard';

const ProductList = async ({ category }) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`, {
      cache: 'no-cache',
      next: {
        tags: ['products'],
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }

    const items = await response.json();

    return (
      <div className='flex flex-col w-full'>
        <p className='flex justify-end mt-4 mb-8'>Cantidad de productos: {items?.length.toString()}</p>
        {items?.length === 0 ? (
          <p className='m-auto'>No se encontraron productos</p>
        ) : (
          <section className='container m-auto flex justify-center items-center gap-12 flex-wrap '>
            {items?.map((item) => (
              <ProductCard key={item?.slug} item={item} />
            ))}
          </section>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return <div>Error al cargar los datos</div>;
  }
};

export default ProductList;