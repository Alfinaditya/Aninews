import React from 'react'

const AboutUs = () => {
    return (
        <div className='lg:w-5/6 md:w-full text-center'>
            <h1 className='text-center mb-5 font-bold text-3xl'>Our Teams</h1>
            <div className='flex'>
                {/* Pradana Aditya */}
                <div className='w-3/6'>
                    <div className='h-64 bg-gray-900'></div>
                    <div className='mt-4'>
                        <h1 className='text-center text-lg'>UI UX DESIGNER</h1>
                        <h2 className='font-bold'>Pradana Aditya</h2>
                    </div>
                </div>
                {/* Alfin Aditya */}
                <div className='w-3/6'>
                    <div className='h-64 bg-gray-900 ml-4'></div>
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
