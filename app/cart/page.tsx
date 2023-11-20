'use client'
import React, { useState, useEffect } from 'react'
import CartItem from '../components/cart/CartItem'
import { useCartContext } from '../components/context/CartContext'
import GoBack from '../components/ui/GoBack'
import Button from '../components/ui/Button'
import type { Item } from '../components/products/ProductCard'

const Cart = () => {

    const { cart, emptyCart }: any = useCartContext()
    const [filteredCart, setFilteredCart] = useState<any>([])

    const productsInCart = () => {
        const combinatedItems: any = {};

        cart?.map((product: Item | any) => {
            if (combinatedItems[product?.slug]) {
                combinatedItems[product?.slug].quantity += product?.quantity;
            } else {
                combinatedItems[product?.slug] = { ...product };
            }
        });

        const filteredItems = Object.values(combinatedItems);
        setFilteredCart(filteredItems)
    }

    useEffect(() => {
        productsInCart()
    }, [cart, emptyCart])


    return (
        <>
            <main className="container m-auto min-h-screen">
                <h2 className="text-2xl border-b pb-4 my-4">Carrito</h2>
                <GoBack className='text-sm underline mb-6' />
                {
                    filteredCart?.length === 0 ?
                        <p className="text-base my-4">Aún no hay productos en el carrito</p>
                        :
                        <ul>
                            {
                                filteredCart?.map((item: Item) => <CartItem item={item} key={item?.slug} />)
                            }
                        </ul>
                }
                {
                    cart?.length !== 0 && (
                        <Button onClick={() => emptyCart()}>
                            Vaciar carrito
                        </Button>
                    )
                }
            </main>
        </>
    )
}

export default Cart