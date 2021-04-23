import { pathToRegexp } from 'path-to-regexp';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()

    // conditional rendering,if path location in anime/:id || /manga/:id,then return empty element
    const animeReg = pathToRegexp('/anime/:id');
    const mangaReg = pathToRegexp('/manga/:id')
    const mangaParams = mangaReg.exec(location.pathname)
    const animeParams = animeReg.exec(location.pathname)
    if (animeParams) {
        return (
            <></>
        )
    }
    if (mangaParams) {
        return (
            <></>
        )
    }
    else {
        return (
            <div className='App_navbar'>
                <nav>
                    <ul className='flex flex-col'>
                        <li className='text-lg py-5'>
                            <Link to='/' className='flex'>
                                {location.pathname === '/' ?
                                    <div className='bg-secondary p-3 rounded-full flex'>
                                        <svg className='w-6 h-6 text-main' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' /></svg>
                                        <span className='ml-3 text-main'>Home</span>
                                    </div> :
                                    <div className='bg-white p-3 rounded-full flex'>
                                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' /></svg>
                                        <span className='ml-3'>Home</span>
                                    </div>
                                }
                            </Link>
                        </li>
                        <li className='text-lg py-5'>
                            <Link to='/anime' className='flex'>
                                {location.pathname === '/anime' ?
                                    <div className='bg-secondary p-3 rounded-full flex'>
                                        <svg className='w-6 h-6 text-main' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' /></svg>
                                        <span className='ml-3 text-main'>Anime</span>
                                    </div>
                                    :
                                    <div className='bg-white p-3 rounded-full flex'>
                                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' /></svg>
                                        <span className='ml-3'>Anime</span>
                                    </div>
                                }
                            </Link>
                        </li>
                        <li className='text-lg py-5'>
                            <Link to='/manga' className='flex'>
                                {location.pathname === '/manga' ?
                                    <div className='bg-secondary p-3 rounded-full flex'>
                                        <svg className='w-6 h-6 text-main' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>
                                        <span className='ml-3 text-main'>Manga</span>
                                    </div>
                                    :
                                    <div className='bg-white p-3 rounded-full flex'>
                                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>
                                        <span className='ml-3'>Manga</span>
                                    </div>
                                }
                            </Link>
                        </li>
                        <li className='text-lg py-5'>
                            <Link to='about-us' className='flex'>
                                {location.pathname === '/about-us' ?
                                    <div className='bg-secondary p-3 rounded-full flex'>
                                        <svg className='w-6 h-6 text-main' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' /></svg>
                                        <span className='ml-3 text-main'>About us</span>
                                    </div>
                                    :
                                    <div className='bg-white p-3 rounded-full flex'>
                                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' /></svg>
                                        <span className='ml-3'>About us</span>
                                    </div>
                                }
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
