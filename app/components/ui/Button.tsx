import React from 'react'

const Button = ({ children, className = '', ...args }: any) => {
    return (
        <button className={`rounded-xl py-2 px-3 bg-blue-400 text-center text-white ${className}`} {...args}>
            {children}
        </button>
    )
}

export default Button