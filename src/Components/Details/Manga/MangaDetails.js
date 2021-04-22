import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router'

const MangaDetails = () => {
    const history = useHistory()
    const location = useLocation();
    // const id = useParams()
    // console.log(id)
    return (
        <div>
            <h1>Hallo gang</h1>
            <p>path Path : {location.pathname}</p>
            <button onClick={() => { history.go(-1) }}>Back To Homepage</button>
            <table className="table-fixed border-2">
                <tr>
                    <td className='border-2 w-1/2'>Intro to CSS</td>
                    <td className='border-2 w-1/4'>Adam</td>
                </tr>
                <tr >
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                </tr>
                <tr>
                    <td>Intro to JavaScript</td>
                    <td>Chris</td>
                </tr>
            </table>
        </div>
    )
}

export default MangaDetails
