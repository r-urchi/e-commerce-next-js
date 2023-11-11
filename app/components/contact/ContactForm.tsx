'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'

const ContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        text: ''
    })

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e: any) => {
        e?.preventDefault()
        await fetch('http://localhost:3000/api/contact',
            {
                method: 'POST',
                body: JSON.stringify(values)
            }
        )
    }

    return (
        <form onSubmit={handleSubmit} className='my-12'>
            <input
                type="email"
                required
                placeholder='Tu email'
                className='p-2 rounded w-1/2 border border-blue-100 block my-4'
                name='email'
                onChange={handleChange}
            />
            <textarea
                required
                placeholder='Tu mensaje'
                className='resize-none w-1/2 h-24 p-2 rounded border border-blue-100 block my-4'
                name='text'
                onChange={handleChange}
            />
            <Button type='submit'>Enviar</Button>
        </form>
    )
}

export default ContactForm