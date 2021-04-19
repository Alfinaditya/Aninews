import axios from 'axios'
import { useEffect, useReducer } from 'react'

const ACTIONS = {
    MAKE_REQUEST: 'makeRequest',
    GET_DATA: 'getData',
    GET_ERROR: 'getError'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { data: [], loading: true }

        case ACTIONS.GET_DATA:
            return { data: action.payload, loading: false }

        case ACTIONS.GET_ERROR:
            return { data: [], loading: false, error: true }
        default:
            break;
    }
}
const FetchData = (URL, SEARCH_URL, input, page) => {
    const [state, dispatch] = useReducer(reducer, { data: [], loading: false, error: false })
    useEffect(() => {
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        if (input === '') {
            axios.get(URL)
                .then(result => {
                    dispatch({ type: ACTIONS.GET_DATA, payload: result.data })
                })
                .catch(err => {
                    dispatch({ type: ACTIONS.GET_ERROR })
                })
        } else {
            axios.get(SEARCH_URL)
                .then(result => {
                    dispatch({ type: ACTIONS.GET_DATA, payload: result.data })
                })
                .catch(err => {
                    dispatch({ type: ACTIONS.GET_ERROR })
                })
        }


    }, [SEARCH_URL, URL, page])
    return state
}

export default FetchData
