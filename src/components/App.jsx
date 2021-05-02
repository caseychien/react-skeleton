import React, { useState } from 'react';
import Task from './Task.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'Learn about React' },
    { text: 'Meet friend for lunch' },
    { text: 'Build really cool todo app' },
  ]);

  return (
    <>
      <div className='app'>
        <div className='todo-list'>
          {tasks.map((task, index) => (
            <Task task={task} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
