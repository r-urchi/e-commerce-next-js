import React from 'react'
import Link from 'next/link'
import Button from '@/app/components/ui/Button'

const ProductCatalog = async () => {

    const items = await fetch('http://localhost:3000/api/products/all', {
        cache: 'no-store'
    }).then(r => r.json())

    return (
        <div className='container m-auto'>
            <Link href={'/admin/create'} className='flex mb-8 font-bold'>Nuevo producto +</Link>
            <div className='flex flex-col align-middle justify-center'>

                {
                    items?.map((item: any, i:number) => (
                        <div key={i} className='flex flex-col align-top justify-start p-4 border-2 border-black my-2'>
                            <p>Titulo: {item?.title}</p>
                            <p>Descripcion: {item?.description}</p>
                            <p>Stock: {item?.inStock}</p>
                            <p>Precio: {item?.price}</p>
                            <p>Slug: {item?.slug}</p>
                            <p>Imagen: {item?.image}</p>
                            <p>Tipo: {item?.type}</p>
                            <div>
                                <Button className=' bg-green-600 mt-4 mr-4'>Editar</Button>
                                <Button className=' bg-red-600  mt-4 mr-4'>Eliminar</Button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ProductCatalog