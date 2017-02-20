import axios from 'axios'

export const SHOW_PROJECTS = 'SHOW_PROJECTS'

export function showProjects() {
    
    return (dispatch, getState) => {
		var tok = "gredevops@gmail.com" + ':' + "123leonel*";
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
		    console.log(response.data);
		    console.log(response.status); // ex.: 200
		    dispatch( { type: SHOW_PROJECTS, payload: response.data } );
		})
    }
    
} 

