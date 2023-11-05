'use client'
import React from 'react'
import Button from './Button'

type Counter = {
    max: number | any,
    counter: number,
    setCounter: (count: number) => void
}

const Counter = ({ max, counter, setCounter }: Counter) => {

    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)

    return (
        <div className='flex items-center gap-3'>
            <Button onClick={() => decrease()} className='active:bg-blue-600'>-</Button>
            <p>{counter}</p>
            <Button onClick={() => increase()} className='active:bg-blue-600'>+</Button>
        </div>
    )
}

export default Counter