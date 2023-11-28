'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'

const createProduct = async (values: any) => {
    const docRef = doc(db, 'products', values.slug)
    return setDoc(docRef, {...values})
    .then(() => console.log('produto agregado'))
}

const CreateForm = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        slug: '',
        image: '',
        type: '',
    })

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await createProduct(values)
    }

    return (
        <div className='container m-auto mt-6 max-w-lg'>
            <form onSubmit={handleSubmit} className='my-12'>
                <label >Slug:</label>
                <input
                    type="text"
                    value={values?.slug}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='slug'
                    onChange={handleChange}
                />

                <label >Título:</label>
                <input
                    type="text"
                    value={values?.title}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='title'
                    onChange={handleChange}
                />

                <label >Descripción:</label>
                <textarea
                    value={values?.description}
                    className='resize-none p-2 rounded w-full border border-blue-100 block my-4'
                    name='description'
                    onChange={handleChange}
                />

                <label >Categoría:</label>
                <input
                    type="text"
                    value={values?.type}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='type'
                    onChange={handleChange}
                />

                <label >Precio:</label>
                <input
                    type="number"
                    value={values?.price}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='price'
                    onChange={handleChange}
                />

                <label >Stock:</label>
                <input
                    type="number"
                    value={values?.inStock}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='inStock'
                    onChange={handleChange}
                />

                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}

export default CreateForm