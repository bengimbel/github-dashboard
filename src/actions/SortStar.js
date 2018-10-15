import { 
    SORT_FORKS,
    SORT_ISSUES,
    SORT_STARS
 } from '../utils/constants';
// import _ from 'lodash';

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
