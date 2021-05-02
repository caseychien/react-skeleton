import React, { useState } from 'react';
import SubmitForm from './SubmitForm.jsx';
import Task from './Task.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'Learn about React', isCompleted: false },
    { text: 'Meet friend for lunch', isCompleted: false },
    { text: 'Build really cool todo app', isCompleted: false },
  ]);

  const addTask = (task) => {
    let updatedTasks = [...tasks, task];
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className='app'>
        <div className='todo-list'>
          {tasks.map((task, index) => (
            <Task
              task={task}
              key={task.text}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          ))}
          <SubmitForm addTask={addTask} />
        </div>
      </div>
    </>
  );
};

export default App;
