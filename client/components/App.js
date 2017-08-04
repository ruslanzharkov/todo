import React, { Component } from 'react';
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
