import React, { useState } from 'react';
const Tasks = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('А сколько коммитов сделал ты?');

  function increment() {
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{value}</h1>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default Tasks;
