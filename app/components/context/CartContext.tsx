'use client'
import React, {useState, createContext, useContext} from 'react'
import type { Item } from '../products/ProductCard'

const CartContext = createContext({}) 

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}: any) => {

    const [cart, setCart] = useState([])

    const addToCart = (item: Item) => {
        setCart([...cart, item])
    }

    return(
        <CartContext.Provider
            value={{addToCart}}
        >
            {children}
        </CartContext.Provider>
    )
}