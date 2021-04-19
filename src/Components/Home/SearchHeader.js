const SearchHeader = ({ input, setInput }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

    }
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

export default SearchHeader
