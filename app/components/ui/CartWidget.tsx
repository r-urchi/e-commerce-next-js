'use client'
import React from 'react'
import Link from 'next/link'
import { useCartContext } from '../context/CartContext'
import Image from 'next/image'

const CartWidget = () => {
    
    //  @ts-ignore
    const { totalQty } = useCartContext()

    return (
        <>
            <Link href={'/cart'} className='text-base text-slate-100 p-3 flex items-center'>
                <Image src={'/icons/cart-icon.svg'} alt='Carrito' width={30} height={30} />
                <span>{totalQty()}</span>
            </Link>
        </>
    )
}

export default CartWidget