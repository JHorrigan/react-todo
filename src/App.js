import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Do Task 2',
        completed: false
      },
      {
        id: 3,
        title: 'Do Task 3',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
