import axios from "axios"
import { useEffect, useReducer } from "react"


const ACTIONS = {
    MAKE_QUERY: 'makeRequest',
    GET_SEARCH_DATA: 'getData',
    GET_ERROR: 'getError'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_QUERY:
            return { searchData: [], searchLoading: true }

        case ACTIONS.GET_SEARCH_DATA:
            return { searchData: action.payload, searchLoading: false }

        case ACTIONS.GET_ERROR:
            return { searchData: [], searchLoading: false, searchError: true }
        default:
            break;
    }
}
const FetchSearchData = (URL, input) => {
    const [state, dispatch] = useReducer(reducer, { searchData: [], searchLoading: false, searchError: false })
    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        dispatch({ type: ACTIONS.MAKE_QUERY })
        if (input === '') return
        axios.get(URL, {
            cancelToken: source.token
        })
            .then(result => {
                dispatch({ type: ACTIONS.GET_SEARCH_DATA, payload: result.data.results })
            })
            .catch(err => {
                if (axios.isCancel(err)) return
                dispatch({ type: ACTIONS.GET_ERROR })
            })
        return () => {
            source.cancel()
        }
    }, [URL])
    return state
}

export default FetchSearchData
