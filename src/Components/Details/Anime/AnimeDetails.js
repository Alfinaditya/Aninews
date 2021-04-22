import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import AnimeDetailsHeader from './AnimeDetailsHeader';
import AnimeDetailsTable from './AnimeDetailsTable';

const AnimeDetails = () => {
    const history = useHistory()
    const location = useLocation();
    // const id = useParams()
    // console.log(id)
    return (
        <div className='max-w-6xl justify-between px-4'>
            <AnimeDetailsHeader />
            <AnimeDetailsTable />
        </div >
    )
}

export default AnimeDetails
