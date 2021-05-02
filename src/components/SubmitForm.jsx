import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubmitForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask({ text: value, isCompleted: false });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

SubmitForm.propTypes = {
  addTask: PropTypes.func,
};

export default SubmitForm;
