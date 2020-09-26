import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  // Delete Task
  deleteTask = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // Add Task
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
