import { pathToRegexp } from "path-to-regexp"
import { useLocation, useParams } from "react-router"
import { MenuAlt1Icon } from '@heroicons/react/outline';

const SearchHeader = ({ input, setInput, setOpen, open }) => {
    const location = useLocation()
    // conditional rendering,if path location in anime/:id || /manga/:id,then return empty element
    const animeReg = pathToRegexp('/anime/:id')
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
    if (location.pathname === '/about-us') {
        return (
            <div className='mt-7'>
                <h1 className='text-3xl text-main font-roboto font-bold hidden lg:block'> Aninews</h1>
                <MenuAlt1Icon onClick={() => { setOpen(!open) }} className={`w-8 h-8 text-main ml-9 mr-2 block lg:hidden md:relative md:z-10 ${open && `md:text-white md:ml-40`}`} />
            </div >
        )
    }
    if (location.pathname === '/') {
        return (
            <div className='mt-7 lg:ml-3'>
                <h1 className='text-3xl text-main font-roboto font-bold hidden lg:block'> Aninews</h1>
                <MenuAlt1Icon onClick={() => { setOpen(!open) }} className={`w-8 h-8 text-main ml-9 mr-2 block lg:hidden md:relative md:z-10 ${open && `md:text-white md:ml-40`}`} />
            </div >
        )
    }
    else {
        return (
            <div className="mt-7 lg:w-2/3 lg:ml-3">
                <div className="flex lg:justify-between md:items-center md:justify-center lg:flex-row md:flex-row-reverse">
                    <h1 className="text-3xl text-main font-roboto font-bold hidden lg:block"> Aninews</h1>
                    <div>
                        <input
                            type="search"
                            className="p-1 w-96 border-2 border-transparant rounded-lg mr-2 outline-none"
                            placeholder="Search something..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                    </div>
                    <MenuAlt1Icon onClick={() => { setOpen(!open) }} className={`w-8 h-8 text-main mr-2 block lg:hidden md:relative md:z-10 ${open && `md:text-white`}`} />
                </div >
            </div >
        )
    }
}

export default SearchHeader
