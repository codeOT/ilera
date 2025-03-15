import React from 'react'

const Button = ({children,className=""}) => {
    return (
        <button className={`px-[2rem] py-[1rem] font-[Syc] text-center text-[#3c5007] border-[#3c5007] border-2 rounded-full hover:bg-[#801100] hover:border-[#801100] hover:text-white ${className}`}>
            {children}
        </button>
    )
}

export default Button