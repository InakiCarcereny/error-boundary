import { useState } from 'react';
import './App.css';
// import { UndefinedExample } from './examples/undefined-example';
import { EffectExample } from './examples/EffectExample';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>

      {open && <span>Hello world</span>}

      {/* <UndefinedExample /> */}

      <EffectExample />
    </>
  );
}

export default App;
