'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { useCartContext } from '../context/CartContext'
import { db } from '@/firebase/config'
import { setDoc, doc, Timestamp } from 'firebase/firestore'

const createOrder = async (values: any, items: any) => {
    const order = {
        client: values,
        items: items?.map((item: any) => ({
            title: item?.title,
            price: item?.price,
            slug: item?.slug,
            quantity: item?.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, 'orders', String(docId))
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {
    const { cart } = useCartContext()

    console.log('cart ==>', cart)

    const [values, setValues] = useState({
        email: '',
        address: '',
        name: ''
    })

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log(result)
    }

    return (
        <>
            {
                cart && cart.length ?
                    <form onSubmit={handleSubmit} className='my12'>
                        <input
                            type="text"
                            required
                            placeholder='Nombre'
                            className='p-2 rounded w-1/2 border border-blue-100 block my-4'
                            name='name'
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            required
                            placeholder='Dirección'
                            className='p-2 rounded w-1/2 border border-blue-100 block my-4'
                            name='address'
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            required
                            placeholder='Dirección'
                            className='p-2 rounded w-1/2 border border-blue-100 block my-4'
                            name='email'
                            onChange={handleChange}
                        />

                        <Button type='submit'>Finalizar compra</Button>
                    </form>
                    : <></>
            }
        </>
    )
}

export default ClientForm