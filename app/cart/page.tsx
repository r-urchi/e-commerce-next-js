'use client'
import React from 'react'
// import CartItem
import { useCartContext } from '../components/context/CartContext'

const Cart = () => {
    // const {cart} = useCartContext()
    return (
        <>
            <main className="container m-auto min-h-screen">
                <h2 className="text-2xl border-b pb-4 my-4">Carrito</h2>
                <hr />
                {/* <p className="text-base my-4">Aún no hay productos en el carrito</p> */}
                <ul>
                    {
                        // cart?.map((item: any) => <CartItem item={item} key={item?.slug}/>)
                    }
                </ul>
            </main>
        </>
    )
}

export default Cart