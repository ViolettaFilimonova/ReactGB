import React from 'react';
import { useState } from 'react';

export const Count = (props) => {
  // или Count = ({name) => используем деструктуризацию
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count state: {count}</p>
      <p>Name props: {props.name}</p>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  );
};
