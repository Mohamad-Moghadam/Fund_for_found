import Image from 'next/image'
import React from 'react'

function layout() {
    return (
        <div className='flex flex-col justify-center items-center mt-[130px]'>
            <h1>
                FUND FOR FOUND
            </h1>
            <p>
                Create an account or sign in to start creating
            </p>
            <Image src="/Vector.png" alt="logo" width={109.7659912109375} height={100} />
        </div>
    )
}

export default layout
