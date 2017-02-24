import * as constants from '../../constants'
import axios from 'axios'
import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}

export function loginUserContent( email, password ) {
	return function (dispatch) {
		var tok = email + ':' + password;
		var hash = Base64.encode(tok);
	    var authHeader = "Basic " + hash;
		var config = {
		  headers: {
		  	'Authorization': authHeader,
		  	'Content-Type': 'multipart/form-data'
		  }
		};
		axios.get('https://todo.ly/api/projects.json' , config)
		  .then(function(response){
		    if(response.data.ErrorMessage == "Not Authenticated" || response.data.ErrorMessage == "Account doesn\u0027t exist"){
		    	console.log("You are Not Authenticated");
		    } else{
		    	console.log("Great !!!, you are Authenticated");
		    	appHistory.push('/projects');
		    	dispatch( { type: constants.SHOW_PROJECTS, payload: response.data } );
		  
			}
		})
	};
}
