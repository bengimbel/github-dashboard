import { 
    SORT_FORKS
 } from '../utils/constants';

export default function sortForkData(info) {
    return dispatch => {
        if (info){
        let sortedForkData = info.sort(function (a, b) {
            return a.forks - b.forks;
          });
        dispatch({ type: SORT_FORKS, payload: sortedForkData })
        }
    }
}
