import React from 'react'
import Image from "next/image"
import Menu from './Menu'

const Navbar = () => {
    return (
        <header className='w-full bg-gray-600'>
            <div className='container m-auto py-6 flex justify-between items-center'>
                <a href="#">
                    <Image
                        alt="Logo"
                        src={'/next.svg'}
                        width={100}
                        height={100}
                        priority
                    />
                </a>
                <Menu />
            </div>
        </header>
    )
}

export default Navbar