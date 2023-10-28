'use client'
import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {

    const [counter, setCounter] = useState(1)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='flex justify-center items-center gap-3'>
            <Button onClick={() => decrease()} >-</Button>
            <p className='flex justify-center items-center px-4 py-4'>{counter}</p>
            <Button onClick={() => increase()} >+</Button>
        </div>
    )
}

export default Counter