import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/api/todos/')
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TodoList todos={todos} />
          <TodoForm onAdd={handleAddTodo} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
