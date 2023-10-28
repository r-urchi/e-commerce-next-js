'use client'
import React, { useState } from 'react'
import MenuList from './MenuList'
import Image from "next/image"

const Menu = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    return (
        <>
            <div onClick={handleOpen} className='flex cursor-pointer'>
                <Image 
                alt='Menu'
                src={'/menu.svg'}
                width={40}
                height={40}
                />
            </div>
            <MenuList open={open} handleOpen={handleOpen} />
        </>
    )
}

export default Menu