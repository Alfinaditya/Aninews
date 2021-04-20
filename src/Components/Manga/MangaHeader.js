import React from 'react'

const MangaHeader = ({ select, setSelect }) => {
    return (
        <div className='flex justify-between'>
            <p className='font-bold text-xl'>Top <span className='text-main capitalize'>{select}</span></p>
            <select className='w-80 outline-none font-medium cursor-pointer' onChange={e => setSelect(e.target.value)}>
                <option value='manga'>Manga</option>
                <option value='novels' >Novels</option>
                <option value='oneshots'>One shots</option>
                <option value='doujin'>Doujin</option>
                <option value='manhwa'>Manhwa</option>
                <option value='manhua'>Manhua</option>
            </select>
        </div>
    )
}

export default MangaHeader
