import React from 'react'

const Error = ({children}) => {
    return (
        <div className="bg-red-800 text-white text-center uppercase p-2 mb-10 font-bold rounded-md">
            {children}
        </div>
    )
}

export default Error
