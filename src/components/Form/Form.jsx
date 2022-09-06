import { useState } from 'react';
import { Button } from './Button';

export const Form = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <h3>Parent Component</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
      <h3>Child Component</h3>
      {visible && <Button value={0} />}
    </>
  );
};
