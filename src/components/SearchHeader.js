import { pathToRegexp } from "path-to-regexp"
import { useLocation, useParams } from "react-router"

const SearchHeader = ({ input, setInput }) => {
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
                <h1 className='text-3xl text-main font-roboto font-bold'> Aninews</h1>
            </div >
        )
    }
    if (location.pathname === '/') {
        return (
            <div className='mt-7'>
                <h1 className='text-3xl text-main font-roboto font-bold'> Aninews</h1>
            </div >
        )
    }
    else {
        return (
            <div className="mt-7 w-2/3">
                <div className="flex justify-between">
                    <h1 className="text-3xl text-main font-roboto font-bold"> Aninews</h1>
                    <div>
                        <input
                            type="search"
                            className="p-1 w-96 border-2 border-transparant rounded-lg mr-2 outline-none"
                            placeholder="Search something..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                    </div>
                </div >
            </div >
        )
    }
}

export default SearchHeader
