import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodo: ToggleDone = (selectedTodo: Todo) => {
    const udpatedTodos: Todo[] = todos.map(todo => {
      if (todo == selectedTodo) {
        return { 
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    });
    setTodos(udpatedTodos);
  }

  const addTodo: AddNewTodo = (text: string) => {
    const todo = { text: text, done: false };
    setTodos([...todos, todo]);
    console.log(todos);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} /> 
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
