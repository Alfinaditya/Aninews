import React from 'react'

const SearchHeader = () => {
    return (
        <div className="App_header mt-7 max-w-mdl">
            <div className="flex justify-between">
                <h1 className="text-3xl text-main font-roboto font-bold"> Aninews</h1>
                <div>
                    <input
                        type="search"
                        className="p-1 w-96 border-2 border-transparant rounded-lg mr-2 outline-none"
                        placeholder="Search something..."
                    />
                    <button className="bg-main p-2 text-white rounded">Submit</button>
                </div>
            </div >
        </div >
    )
}

export default SearchHeader
