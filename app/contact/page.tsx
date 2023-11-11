import React from 'react'
import ContactForm from '../components/contact/ContactForm'

export const metadata = {
    title: 'Electrodomesticos Capellari - Contacto',
    description: 'Contactanos'
}

const Contact = () => {
    return (
        <>
            <main className='container m-auto min-h-screen'>
                <h1 className='text-2xl border-b pb-4 my-4'>Contacto</h1>
                <ContactForm />
            </main>
        </>
    )
}

export default Contact