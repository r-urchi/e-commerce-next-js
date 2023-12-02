'use client'
import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { useCartContext } from '../context/CartContext'
import Button from '../ui/Button'
import type { Item } from '../products/ProductCard'

const CartList = () => {

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
        </>
    )
}

export default CartList