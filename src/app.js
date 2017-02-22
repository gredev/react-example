import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showProjects } from './request'

class App extends Component {
  
  componentWillMount() {
    this.props.showProjects()
  }
  
  renderProjectsList() {
    return this.props.projects.map((project) => {
      return (
        <tr key={project.Id}>
          <td>{project.Id}</td>
          <td>{project.Content}</td>
        </tr>
      )
    })
  }
  
  render() {
    return (
      <div id="application">
        <h2>Projects List</h2>
        <table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Project Name</th>
            </tr>
          </thead>
          <tbody>
            { this.renderProjectsList() }
          </tbody>
        </table>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.project.list
  }
}

export default connect(mapStateToProps, { showProjects })(App)