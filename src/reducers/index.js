import { combineReducers } from 'redux';
import { showProjects } from './projects'
import { authReducer } from './auth_reducer';

const rootReducer = combineReducers({
	project: showProjects,
	auth: authReducer
});

export default rootReducer;


