'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '../components/ui/Button'

// export const metadata = {
//     title: 'Electrodomesticos Capellari - Nosotros',
//     description: 'Conoce nuestra historia'
// }

const About = () => {

    const router = useRouter()

    return (
        <>
            <main className='container m-auto min-h-screen'>
                <h1 className='text-4xl text-blue-600 my-4'>Nostros</h1>
                <hr />
                <p className='text-base mt-4'>SITIO EN CONSTRUCCIÓN</p>
                <Button onClick={() => router.back()}>
                    Volver
                </Button>
            </main>
        </>
    )
}

export default About