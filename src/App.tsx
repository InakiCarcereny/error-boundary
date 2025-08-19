import { useState } from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>

      {open && <span>Hello world</span>}
    </>
  );
}

export default App;
