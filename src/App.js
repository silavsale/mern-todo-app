import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './Components/create-todo-component';
import EditTodo from './Components/edit-todo-component';
import TodoList from './Components/todo-list-component';

import logo from './logo512.png'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://github.com/silavsale/mern-todo-app" target="_blank">
              <img src={logo} width='30' height='30' alt='Pacman' />
            </a>
            <Link to='/' className="navbar-brand">MERN-Stack Todo App</Link>
            <div className='nav-collapse'>
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className='nav-link'>Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className='nav-link'>Create</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/todo" className='nav-link'>Todo</Link>
                </li>
              </ul>
            </div>

          </nav>

          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    )
  }
}

export default App;