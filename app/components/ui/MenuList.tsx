import React from 'react'
import Image from "next/image"

interface Menulist {
    open: boolean,
    handleOpen(): void
}

const MenuList = ({ open, handleOpen }: Menulist) => {

    return (
        <div className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end `}>

            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
                <div onClick={handleOpen} className='flex justify-end align-middle cursor-pointer px-4 py-4'>
                    <Image
                        alt='Close'
                        src={'/close.svg'}
                        width={20}
                        height={20}
                    />
                </div>
                <nav className='flex mt-4 flex-col gap-3 px-3'>
                    <a href="#" className='text-white p-2'>Enlace 1</a>
                    <a href="#" className='text-white p-2'>Enlace 2</a>
                    <a href="#" className='text-white p-2'>Enlace 3</a>
                </nav>
            </aside>

        </div>
    )
}

export default MenuList