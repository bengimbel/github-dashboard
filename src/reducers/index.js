import { combineReducers } from 'redux';
import GitHubDashboardData from './GithubDataReducer'
import SortReducer from './SortReducer';
export default combineReducers({
    githubData: GitHubDashboardData,
    sortData: SortReducer
});