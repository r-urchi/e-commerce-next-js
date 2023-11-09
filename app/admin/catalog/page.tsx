'use client'
import React from 'react'
import Button from '@/app/components/ui/Button'

const Catalog = () => {
    return (
        <div className='container m-auto'>
            <Button className='mb-4'>Nuevo producto +</Button>
            <div className='flex flex-col align-middle justify-center'>

                <div className='flex flex-col align-top justify-start p-4 border-2 border-black my-2'>
                    <p>Titulo: Producto 1</p>
                    <p>Descripcion: Descripcion 1</p>
                    <p>Stock: 100</p>
                    <p>Precio: 321654</p>
                    <p>Slug: 985678</p>
                    <p>Imagen: tv1.jpg</p>
                    <p>Tipo: tvs</p>
                    <div>
                        <Button className=' bg-green-600 mt-4 mr-4'>Editar</Button>
                        <Button className=' bg-red-600  mt-4 mr-4'>Eliminar</Button>
                    </div>
                </div>

                <div className='flex flex-col align-top justify-start p-4 border-2 border-black my-2'>
                    <p>Titulo: Producto 2</p>
                    <p>Descripcion: Descripcion 2</p>
                    <p>Stock: 100</p>
                    <p>Precio: 321654</p>
                    <p>Slug: 985678</p>
                    <p>Imagen: tv1.jpg</p>
                    <p>Tipo: tvs</p>
                    <div>
                        <Button className=' bg-green-600 mt-4 mr-4'>Editar</Button>
                        <Button className=' bg-red-600  mt-4 mr-4'>Eliminar</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Catalog