'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { useAuthContext } from '../context/AuthContext'

const LoginForm = () => {

    const { registerUser, loginUser, googleLogin }: any = useAuthContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className='fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25'>
            <form onSubmit={handleSubmit} className='bg-white py-4 rounded-xl max-w-md w-full'>
                <h2>Login</h2>
                <input
                    type="email"
                    value={values?.email}
                    required
                    placeholder='Tu email'
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name="email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    value={values?.password}
                    required
                    placeholder='Tu contraseña'
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name="password"
                    onChange={handleChange}
                />

                <Button onClick={() => loginUser(values)}>Ingresar</Button>
                <Button onClick={() => registerUser(values)}>Registrarme</Button>
                <Button onClick={() => googleLogin()}>Ingresar con Google</Button>
            </form>
        </div>
    )
}

export default LoginForm