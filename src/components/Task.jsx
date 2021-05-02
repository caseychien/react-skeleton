import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ completeTask, index, task, removeTask }) => {
  console.log(task);
  return (
    <>
      <div
        className='todo'
        style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}>
        {task.text}

        <button onClick={() => completeTask(index)}>Complete</button>
        <button onClick={() => removeTask(index)}>x</button>
      </div>
    </>
  );
};

Task.propTypes = {
  completeTask: PropTypes.func,
  index: PropTypes.number,
  task: PropTypes.shape({
    text: PropTypes.string,
  }),
  removeTask: PropTypes.func,
};

export default Task;
