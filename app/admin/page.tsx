'use client'
import React, { useState } from 'react'
import Catalog from './catalog/page'
import Button from '../components/ui/Button'

const Admin = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [validUser, setValidUser] = useState(false)

    const handleChange = (e: any) => {
        const { name, value } = e?.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        console.log('se valida user')
    };





    return (
        <>
            <main className="container m-auto min-h-screen">
                <h1 className="text-2xl border-b pb-4 my-4">Admin</h1>
                {!validUser ?
                    <form onSubmit={handleSubmit}>
                        <div className='my-4'>
                            <label htmlFor="username">Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData?.username}
                                onChange={handleChange}
                                className='bg-gray-200'
                            />
                        </div>
                        <div className='my-4'>
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData?.password}
                                onChange={handleChange}
                                className='bg-gray-200'
                            />
                        </div>
                        <Button type="submit" onClick={() => setValidUser(true)} className='my-4'>
                            Iniciar sesión
                        </Button>
                    </form>
                    : <Catalog/>
                }

            </main>
        </>
    )
}

export default Admin