import React, { useState } from 'react';

const Todo = ({ task = 'Create a todo', id = '1', remove, update }) => {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((edit) => !edit);
  };

  const handleChange = (e) => {
    setEditTask(e.target.value);
  };

  const handleDelete = () => remove(id);

  const handleUpdate = (e) => {
    e.preventDefault();
    update(id, editTask);
    setIsEditing(false);
  };

  let currentView = (
    <div>
      <li>{task}</li>
      <button onClick={toggleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );

  if (isEditing) {
    currentView = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={editTask} onChange={handleChange} />
          <button>Edit</button>
        </form>
      </div>
    );
  }

  return currentView;
};

export default Todo;
