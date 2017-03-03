import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { loginUserContent } from '../actions/user'

class Projects extends Component {

  componentWillMount() {
    this.props.loginUserContent()
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
    <div id="main">
      <div id="apptable">
        <h2>Projects List</h2>
        <table id="responsive">
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
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.project.list
  }
}

export default connect(mapStateToProps, { loginUserContent })(Projects)