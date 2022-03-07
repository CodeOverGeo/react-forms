import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  // update takes argument from edited todo from todo.js
  const update = (id, updatedTask) => {
    setTodos((todos) =>
      todos.map(
        (todo) => (todo.id === id ? { ...todo, task: updatedTask } : todo) // while mapping, if it matches the id needed, update it, otherwise, setTodos with the all other todos.
      )
    );
  };

  //craete an array while using filter to delete the unneeded todo by 'id'
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //create a array of "li" todos to pass into a "ul" element
  const todoComponents = todos.map((todo) => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      task={todo.task}
      update={update}
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
};

export default TodoList;
