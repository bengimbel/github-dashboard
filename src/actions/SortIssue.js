import { 
    SORT_FORKS,
    SORT_ISSUES,
    SORT_STARS
 } from '../utils/constants';
// import _ from 'lodash';

export default function sortIssueData(info) {
    return dispatch => {
        if (info){
        let sortedIssueData = info.sort(function (a, b) {
            return a.open_issues - b.open_issues;
          });
          console.log(sortedIssueData, 'sortedIssue')
        dispatch({ type: SORT_ISSUES, payload: sortedIssueData })
        }
    }
}