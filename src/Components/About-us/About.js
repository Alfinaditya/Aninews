import React from 'react'

const About = () => {
    return (
        <div className='w-4/5'>
            <h1 className='text-center mb-5 font-bold text-3xl'>Our Teams</h1>
            <div className='flex'>
                <div className='w-3/6'>
                    <div className='h-64 bg-gray-900'></div>
                    <div className='mt-4'>
                        <h1 className='text-center text-lg'>UI UX DESIGNER</h1>
                        <p>Pradana Aditya</p>
                        <p>Hello Gang,im Pradana Aditya,i've been doing UI UX for around 2 weeks until now </p>
                    </div>
                </div>
                <div className='w-3/6'>
                    <div className='h-64 bg-gray-900 ml-4'></div>
                    <div className='ml-5 mt-4'>
                        <h1 className='text-center text-lg'>Programmer</h1>
                        <p>Alfin Aditya</p>
                        <p>Hello Gang,im Alfin Aditya,i've been doing programming for around 1 year </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
