import React from 'react'
import loading from "../assets/loading.gif"
function Loading() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={loading} alt="" className='w-full h-full' />
        </div>

    )
}

export default Loading