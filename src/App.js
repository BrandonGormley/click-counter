import react, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container">
      <h2>You clicked {count} times</h2>
      <button onClick={handleClick} className="btn">
        Click
      </button>
    </div>
  );
};

export default App;
