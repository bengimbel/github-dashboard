import { 
    SORT_STARS
 } from '../utils/constants';

export default function sortStarData(info) {
    return dispatch => {
        if (info){
        let sortedStarData = info.sort(function (a, b) {
            return a.stargazers_count - b.stargazers_count;
          });
        dispatch({ type: SORT_STARS, payload: sortedStarData })
        }
    }
}
