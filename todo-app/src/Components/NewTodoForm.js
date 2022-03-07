import React, { useState } from 'react';
import uuid from 'uuid/v1';

function NewTodoForm({ createTodo }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      createTodo({ task, id: uuid() });
    }
    setTask('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          name="task"
          type="text"
          onChange={handleChange}
          value={task}
          placeholder="Enter a Todo"
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default NewTodoForm;
