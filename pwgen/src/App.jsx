import { useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-3xl text-center my-3">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 text-center'>
          <input type="text" value={password} classname='outline-none w-full py-1 px-3' placeholder="password" readOnly></input>
          <button className='bg-blue-700'>Copy</button>
        </div>
      </div>
    </>
  );
}

export default App;

