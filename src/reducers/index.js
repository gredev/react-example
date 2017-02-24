import { combineReducers } from 'redux';
import { showProjects } from './projects'

const rootReducer = combineReducers({
	project: showProjects
});

export default rootReducer;


