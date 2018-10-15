import { 
    SORT_ISSUES,
 } from '../utils/constants';

export default function sortIssueData(info) {
    return dispatch => {
        if (info){
        let sortedIssueData = info.sort(function (a, b) {
            return a.open_issues - b.open_issues;
          });
        dispatch({ type: SORT_ISSUES, payload: sortedIssueData })
        }
    }
}