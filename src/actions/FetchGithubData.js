import {
    FETCH_GITHUB_DATA_REQUEST,
    FETCH_GITHUB_DATA_SUCCESS,
    FETCH_GITHUB_DATA_FAIL,
    facebookUrl,
    angularUrl,
    emberUrl,
    vueUrl
} from '../utils/constants'

export default function fetchGithubData() {
    const urls = [facebookUrl, angularUrl, emberUrl, vueUrl];
    return dispatch => {
        dispatch({ type: FETCH_GITHUB_DATA_REQUEST })
        return Promise.all(urls.map(url =>
            fetch(url).then(response => response.json())
        )).then(data => {
            dispatch({ type: FETCH_GITHUB_DATA_SUCCESS, payload: data })
        })
        .catch(error => {
            dispatch({ type: FETCH_GITHUB_DATA_FAIL, payload: error })
        })
    }
}