import React from 'react'

const AnimeDetailsTable = () => {
    return (
        <div className='mt-10 space-y-6'>
            <table className='table-fixed m-auto mb-20 h-40'>

                <tr className='border-b-2 h-12'>
                    <td className='border-r-2 font-bold text-main'>Japanese :</td>
                    <td className='w-60'>Fullmetal Alchemist: Brotherhood</td>
                    <td className='border-r-2 border-l-2 font-bold text-main'>Episodes :</td>
                    <td>64</td>
                </tr>
                <tr className='border-b-2 p-2 h-12'>
                    <td className='border-r-2 font-bold text-main'>Type :</td>
                    <td>TV</td>
                    <td className='border-r-2 border-l-2 font-bold text-main' >Rating : </td>
                    <td>R - 17+ (violence & profanity)</td>
                </tr>
                <tr className='border-b-2 h-12'>
                    <td className='border-r-2 font-bold text-main'>Status : </td>
                    <td>Finished Airing</td>
                    <td className='border-r-2 border-l-2 font-bold text-main w-28'>Broadcast : </td>
                    <td>Sundays at 17:00 (JST)</td>
                </tr>
                <tr>
                    <td className='border-r-2 font-bold text-main'>Premiered : </td>
                    <td>Spring 2009</td>
                    <td className='border-r-2 border-l-2 font-bold text-main'>Duration : </td>
                    <td>24 min per ep</td>
                </tr>
            </table>
        </div>
    )
}

export default AnimeDetailsTable
