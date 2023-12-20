import React from 'react';
import Link from 'next/link';

const ProductCatalog = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/all`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
        }

        const items = await response.json();

        return (
            <div className='container m-auto'>
                <Link href={'/admin/create'} className='flex mb-8 font-bold'>
                    Nuevo producto +
                </Link>
                <div className='flex flex-col align-middle justify-center'>
                    {items?.map((item, i) => (
                        <div key={i} className='flex flex-col align-top justify-start p-4 border-2 border-black my-2'>
                            <p>Titulo: {item?.title}</p>
                            <p>Descripcion: {item?.description}</p>
                            <p>Stock: {item?.inStock}</p>
                            <p>Precio: {item?.price}</p>
                            <p>Slug: {item?.slug}</p>
                            <p>Imagen: {item?.image}</p>
                            <p>Tipo: {item?.type}</p>
                            <div className='flex align-middle justify-start my-4'>
                                <Link href={`/admin/edit/${item?.slug}`} className=' bg-green-400 rounded p-2 text-white mr-2'>
                                    Editar
                                </Link>
                                <Link href={`/admin/delete/${item?.slug}`} className=' bg-red-600 rounded p-2 text-white mr-2'>
                                    Eliminar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return <div>Error al cargar los datos</div>;
    }
};

export default ProductCatalog;