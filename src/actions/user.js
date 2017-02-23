import * as constants from '../../constants'
import { SHOW_PROJECTS } from '../../constants'
import axios from 'axios'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}



export function showProjects(data) {
    console.log("data that we have: "+data)
    return (dispatch, getState) => {
		dispatch( { type: SHOW_PROJECTS, payload: data } );
    }
    
}
/*
export function showProjects() {
    return showProjectsData(this);    
} */

export function loginUser( email, password ) {
	return function (dispatch) {
		var tok = email + ':' + password;
		console.log(tok);
		var hash = Base64.encode(tok);
	    var authHeader = "Basic " + hash;
	    console.log(authHeader);
		var config = {
		  headers: {
		  	'Authorization': authHeader,
		  	'Content-Type': 'multipart/form-data'
		  }
		};
		console.log(config);
		axios.get('https://todo.ly/api/projects.json' , config)
		  .then(function(response){
		    console.log(response.status); // ex.: 200
		    if(response.data.ErrorMessage == "Not Authenticated" || response.data.ErrorMessage == "Account doesn\u0027t exist"){
		    	console.log("You are Not Authenticated");
		    } else{
		    	console.log("Great !!!, you are Authenticated");
		    	showProjects(response.data);
		    	appHistory.push('/projects');
			}
		})
	};
}
