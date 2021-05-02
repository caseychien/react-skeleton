import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  console.log(task);
  return (
    <>
      <div className='todo'>{task.text}</div>
    </>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string,
  }),
};

export default Task;
