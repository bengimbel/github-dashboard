import { 
    SORT_FORKS,
    SORT_ISSUES,
    SORT_STARS
 } from '../utils/constants';
// import _ from 'lodash';

export default function sortForkData(info) {
    return dispatch => {
        if (info){
        let sortedForkData = info.sort(function (a, b) {
            return a.forks - b.forks;
          });
          console.log(sortedForkData, 'sortedFork')
        dispatch({ type: SORT_FORKS, payload: sortedForkData })
        }
    }
}
