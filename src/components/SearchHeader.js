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
                <MenuAlt1Icon onClick={() => { setOpen(!open) }} className='text-main w-8 h-8 ml-9 mr-2 block lg:hidden' />
            </div >
        )
    }
    if (location.pathname === '/') {
        return (
            <div className='mt-7 lg:ml-3'>
                <h1 className='text-3xl text-main font-roboto font-bold hidden lg:block'> Aninews</h1>
                <MenuAlt1Icon onClick={() => { setOpen(!open) }} className=' text-main w-8 h-8 ml-9 mr-2 block lg:hidden' />
            </div >
        )
    }
    else {
        return (
            <div className="mt-7 lg:w-2/3 lg:ml-3 w-full">
                <div className="flex flex-row-reverse lg:justify-between sm:items-center sm:justify-center lg:flex-row">
                    <h1 className="text-3xl text-main font-roboto font-bold hidden lg:block"> Aninews</h1>
                    <div className='sm:w-1/2 w-4/5 m-auto sm:m-px'>
                        <input
                            type="search"
                            className="p-1 sm:w-96 w-full border-2 border-transparant rounded-lg mr-2 outline-none"
                            placeholder="Search something..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                    </div>
                    <MenuAlt1Icon onClick={() => { setOpen(!open) }} className='w-8 h-8 ml-1 mr-2 block text-main lg:hidden' />
                </div >
            </div >
        )
    }
}

export default SearchHeader
