import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router'

const Details = () => {
    const history = useHistory()
    const location = useLocation();
    // const id = useParams()
    // console.log(id)
    return (
        <div>
            <h1>Hallo gang</h1>
            <p>path Path : {location.pathname}</p>
            <button onClick={() => { history.go(-1) }}>Back To Homepage</button>
        </div>
    )
}

export default Details
