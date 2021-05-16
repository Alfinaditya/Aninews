import { pathToRegexp } from 'path-to-regexp';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, FilmIcon, BookmarkAltIcon, UserGroupIcon } from '@heroicons/react/outline';
const Navbar = ({ open }) => {
    console.log(open)
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
            <div className={`lg:bg-white md:bg-main lg:static md:fixed md:top-0 md:h-full lg:w-1/6 md:w-1/3 lg:block ${!open && `hidden`}`}>
                <nav>
                    <ul className='flex flex-col'>

                        <li className='text-lg py-5'>
                            <Link to='/' className='flex'>
                                {location.pathname === '/' ?
                                    <div className='lg:bg-secondary p-3 rounded-full flex'>
                                        <HomeIcon className='w-6 h-6 lg:text-main md:text-white' />
                                        <span className='ml-3 lg:text-main md:text-white'>Home</span>
                                    </div> :
                                    <div className='lg:bg-white md:bg-main p-3 rounded-full flex'>
                                        <HomeIcon className='w-6 h-6 lg:text-black md:text-white' />
                                        <span className='ml-3 lg:text-black md:text-white'>Home</span>
                                    </div>
                                }
                            </Link>
                        </li>
                        <li className='text-lg py-5'>
                            <Link to='/anime' className='flex'>
                                {location.pathname === '/anime' ?
                                    <div className='lg:bg-secondary p-3 rounded-full flex'>
                                        <FilmIcon className='w-6 h-6 lg:text-main md:text-white' />
                                        <span className='ml-3 lg:text-main md:text-white'>Anime</span>
                                    </div>
                                    :
                                    <div className='lg:bg-white p-3 rounded-full flex'>
                                        <FilmIcon className='w-6 h-6 lg:text-black md:text-white' />
                                        <span className='ml-3 lg:text-black md:text-white'>Anime</span>
                                    </div>
                                }
                            </Link>
                        </li>

                        <li className='text-lg py-5'>
                            <Link to='/manga' className='flex'>
                                {location.pathname === '/manga' ?
                                    <div className='lg:bg-secondary p-3 rounded-full flex'>
                                        <BookmarkAltIcon className='w-6 h-6 lg:text-main md:text-white' />
                                        <span className='ml-3 lg:text-main md:text-white '>Manga</span>
                                    </div>
                                    :
                                    <div className='lg:bg-white p-3 rounded-full flex'>
                                        <BookmarkAltIcon className='w-6 h-6 lg:text-black md:text-white' />
                                        <span className='ml-3 lg:text-black md:text-white'>Manga</span>
                                    </div>
                                }
                            </Link>
                        </li>

                        <li className='text-lg py-5'>
                            <Link to='about-us' className='flex'>
                                {location.pathname === '/about-us' ?
                                    <div className='lg:bg-secondary p-3 rounded-full flex'>
                                        <UserGroupIcon className='w-6 h-6 lg:text-main md:text-white' />
                                        <span className='ml-3 lg:text-main md:text-white'>About us</span>
                                    </div>
                                    :
                                    <div className='lg:bg-white p-3 rounded-full flex'>
                                        <UserGroupIcon className='w-6 h-6 lg:text-black md:text-white' />
                                        <span className='ml-3 lg:text-black md:text-white'>About us</span>
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
