import React, { Component } from 'react';
import AddForm from './AddForm'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <TodoList store={this.props.test} />
      </div>
    )
  }
}

export default App
