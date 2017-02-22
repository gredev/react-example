import axios from 'axios'
import { browserHistory, hashHistory } from 'react-router';

export const SHOW_PROJECTS = 'SHOW_PROJECTS'

export const AUTH_USER = 'AUTH_USER'

function showProjectsData(data) {
    console.log("data that we have: "+data)
    return (dispatch, getState) => {
		dispatch( { type: SHOW_PROJECTS, payload: data } );
    }
    
}

export function showProjects() {
    return this.props.showProjectsData.bind(this); 
    //return this.showProjectsData;    
} 

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
		    //console.log(response.data);
		    if(response.data.ErrorMessage == "Not Authenticated" || response.data.ErrorMessage == "Account doesn\u0027t exist"){
		    	//dispatch({ type: AUTH_USER });
		    	console.log("You are Not Authenticated");
		    } else{
		    	console.log("Great !!!, you are Authenticated");
		    	hashHistory.push('/projects');
		    	showProjectsData(response.data);
			}
		})
	};
}
