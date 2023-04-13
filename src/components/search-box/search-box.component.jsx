const SearchBox = ({ handleInputChange }) => {
    return (
        <div className="pb-6">
            <div className="flex">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-3 text-slate-800 flex">Welcome to my Blog 👋</h1>
            </div>
            <h2 className="flex pb-4 text-slate-700 py-2">Search or filter to find content on my thoughts, learnings, and advice for anyone looking to break into the web development industry.</h2>
            <input
                onChange={handleInputChange}
                type='text'
                placeholder='Search article you want...'
                className="border border-slate-300 drop-shadow-md p-3 rounded-full w-72 md:w-96">
            </input>
        </div>

    )
}

export default SearchBox;