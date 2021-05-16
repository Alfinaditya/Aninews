import React from 'react'

const AboutUs = () => {
    return (
        <div className='lg:w-5/6 w-full text-center'>
            <h1 className='text-center mb-5 font-bold text-3xl'>Our Teams</h1>
            <div className='grid lg:grid-cols-2 items-center sm:grid-cols-1'>
                {/* Pradana Aditya */}
                <div className='w-full  lg:pr-2 lg:mb-0 mb-13'>
                    <div className='h-64 bg-gray-900'></div>
                    <div className='mt-4'>
                        <h1 className='text-center text-lg'>UI UX DESIGNER</h1>
                        <h2 className='font-bold'>Pradana Aditya</h2>
                    </div>
                </div>
                {/* Alfin Aditya */}
                <div className='w-full'>
                    <div className='h-64 bg-gray-900'></div>
                    <div className='ml-5 mt-4'>
                        <h1 className='text-center text-lg'>Programmer</h1>
                        <h2 className='font-bold'>Alfin Aditya</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs
