import { useState, memo } from 'react';

export const Button = memo(
  ({ value }) => {
    console.log(value);
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     const interval = setInterval(() => console.log(1), 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [count])
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </>
    );
  }
  //     ((prevProps, nextProps) => {
  //     if (prevProps.count !== nextProps.value){
  //         return true
  //     }
  //     return false
  // })
);
