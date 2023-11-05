'use client'
import React, { useState } from 'react'
import Button from '../components/ui/Button'

const Admin = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e?.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        console.log('Datos del formulario:', formData);
    };
    return (
        <>
            <main className="container m-auto min-h-screen">
                <h1 className="text-4xl text-blue-600 my-4">Admin</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData?.username}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData?.password}
                            onChange={handleChange}
                        />
                    </div>
                    <Button type="submit" onClick={() => console.log('se entra al admin')}>
                        Iniciar sesión
                    </Button>
                </form>
            </main>
        </>
    )
}

export default Admin