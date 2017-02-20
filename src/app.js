import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showProjects } from './request'
import { Table } from 'react-bootstrap'

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
      <div>
        <h2>Projects List</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Project Name</th>
            </tr>
          </thead>
          <tbody>
            { this.renderProjectsList() }
          </tbody>
        </Table>        
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