import React from 'react'

const AnimeDetailsHeader = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='w-72 h-80 bg-red-600' ></div>
                <div className='w-3/5'>
                    <h1 className='font-quicksand font-medium text-3xl'>Fullmetal Alchemist (2009)</h1>
                    <p className='font-roboto font-light mt-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                    <div className='mt-4 flex flex-wrap'>
                        <div className='bg-main p-1 px-4 mr-1 rounded-full text-white'>Action</div>
                        <div className='bg-main p-1 px-4 mr-1 rounded-full text-white'>Comedy</div>
                        <div className='bg-main p-1 px-4 mr-1 rounded-full text-white'>Shounen</div>
                    </div>
                </div>
            </div >
            <div className='mt-7 w-72 rounded-xl '>
                <div className='bg-main text-white text-lg font-medium p-1 rounded-xl text-center'>
                    Score
                </div>
                <p className='text-center font-bold text-4xl mt-7'>9.18</p>
            </div>
        </>
    )
}

export default AnimeDetailsHeader
