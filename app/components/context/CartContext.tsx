'use client'
import React, { useState, createContext, useContext } from 'react'
import type { Item } from '../products/ProductCard'

const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }: any) => {

    const [cart, setCart] = useState([])

    const addToCart = (item: Item) => {
        //  @ts-ignore
        setCart([...cart, item])
    }

    const isInCart = (slug: string) => {
        return cart?.some((item: Item) => { item?.slug === slug })
    }

    const totalQty = () => {
        return cart?.reduce((acc: number | any, item: Item) => acc + item?.quantity, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                isInCart,
                totalQty,
                emptyCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}