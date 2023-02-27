import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'todo' },
    { id: 3, title: 'Task 3', status: 'todo' },
    { id: 4, title: 'Task 4', status: 'in-progress' },
    { id: 5, title: 'Task 5', status: 'in-progress' },
    { id: 6, title: 'Task 6', status: 'in-progress' },
    { id: 7, title: 'Task 7', status: 'done' },
    { id: 8, title: 'Task 8', status: 'done' },
    { id: 9, title: 'Task 9', status: 'done' },
  ]);

  const onDragStart = (event, task) => {
    event.dataTransfer.setData('task', JSON.stringify(task));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, status) => {
    const task = JSON.parse(event.dataTransfer.getData('task'));
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, status: status };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  };

  const tasksByStatus = (status) => tasks.filter((task) => task.status === status);

  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <h2>Todo</h2>
        <div
          className="kanban-column__tasks"
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, 'todo')}
        >
          {tasksByStatus('todo').map((task) => (
            <div
              key={task.id}
              className="kanban-task"
              draggable
              onDragStart={(event) => onDragStart(event, task)}
            >
              <h3>{task.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="kanban-column">
        <h2>In Progress</h2>
        <div
          className="kanban-column__tasks"
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, 'in-progress')}
        >
          {tasksByStatus('in-progress').map((task) => (
            <div
              key={task.id}
              className="kanban-task"
              draggable
              onDragStart={(event) => onDragStart(event, task)}
            >
              <h3>{task.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="kanban-column">
        <h2>Done</h2>
        <div
          className="kanban-column__tasks"
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, 'done')}
        >
          {tasksByStatus('done').map((task) => (
                    <div
                    key={task.id}
                    className="kanban-task"
                    draggable
                    onDragStart={(event) => onDragStart(event, task)}
                  >
                    <h3>{task.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
        };
        
        export default App;
           
