'use client'
import React, { useEffect } from 'react'
import Button from '../components/ui/Button'

const Error = ({ error, reset }: any) => {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className='container m-auto mt-6'>
            <h2 className='text-xl'>Algo falló</h2>
            <hr className='my-6'/>
            <Button onClick={reset}>Intentar nuevamente</Button>
        </div>
    )
}

export default Error