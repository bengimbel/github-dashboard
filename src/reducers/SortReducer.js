import { 
    SORT_FORKS,
    SORT_ISSUES,
    SORT_STARS
 } from '../utils/constants';

 const initialState = {
    sortForkData: [],
    sortIssueData: [],
    sortStarData: []
 }

 export default function(state = initialState, action) {
    switch (action.type) {
        case SORT_FORKS:
        return Object.assign({}, state, {
            sortForkData: action.payload
        });
        case SORT_ISSUES:
        return Object.assign({}, state, {
            sortIssueData: action.payload,
        });
        case SORT_STARS:
        return Object.assign({}, state, {
            sortStarData: action.payload
        });
        default:
          return state;
      }
    
}