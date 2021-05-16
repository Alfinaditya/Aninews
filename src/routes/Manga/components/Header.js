import React from 'react'

const Header = ({ select, setSelect }) => {
    return (
        <div className='flex sm:justify-between justify-center flex-wrap lg:mx-6 md:mx-6'>
            <p className='font-bold text-xl'>Top <span className='text-main capitalize'>{select}</span></p>
            <select className='w-80 outline-none font-medium cursor-pointer mt-7 sm:mt-0' onChange={e => setSelect(e.target.value)}>
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

export default Header
