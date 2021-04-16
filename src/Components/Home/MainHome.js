import React from 'react'

const MainHome = () => {
    return (
        <div className="mt-6">
            {/* Main Image */}
            <div className="w-full h-56 bg-pink-250 m-auto rounded-xl">
                <span>Aninews</span>
            </div>

            {/* Anime Recommendations */}
            <div className="mt-12">
                <p className="font-bold text-xl">Anime recommendations</p>
                <div className="flex mt-5 flex-wrap">
                    <div className="w-52 h-36 bg-pink-250 rounded-sm"></div>
                    <div className="w-52 h-36 bg-pink-250 mx-4 rounded-sm"></div>
                    <div className="w-52 h-36 bg-pink-250 rounded-sm"></div>
                </div>
            </div>

            {/* Manga Recommendations */}
            <div className="mt-12 mb-56">
                <p className="font-bold text-xl">Manga recommendations</p>
                <div className="flex mt-5 flex-wrap">
                    <div className="w-52 h-36 bg-pink-250 rounded-sm"></div>
                    <div className="w-52 h-36 bg-pink-250 mx-4 rounded-sm"></div>
                    <div className="w-52 h-36 bg-pink-250 rounded-sm"></div>
                </div>
            </div>

        </div>
    )
}

export default MainHome
