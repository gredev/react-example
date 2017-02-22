import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { showProjects } from './projects'
import { authReducer } from './auth_reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	project: showProjects
});

export default rootReducer;
