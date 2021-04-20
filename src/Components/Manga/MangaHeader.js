import React from 'react'

const MangaHeader = () => {
    return (
        <div className=' bg-red-500 flex justify-between'>
            {/* <p className='font-bold text-xl'>New <span className='text-main'>Releases</span></p> */}
            <p className='font-bold text-xl'>Top <span className='text-main'>Anime</span></p>

            <select className='w-80 outline-none font-medium cursor-pointer'>
                <option value='airing'>Airing</option>
                <option value='upcoming' >Upcoming</option>
                <option value='tv'>TV</option>
                <option value='movie'>Movie</option>
                <option value='ova'>Ova</option>
                <option value='special'>Special</option>
            </select>
        </div>
    )
}

export default MangaHeader
