import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [counter, setCounter] = useState(0); 

  return (
    <div className="App">
      <div className="btn">
        <button>count: {counter};</button>
        </div>
        <button onClick={() => setCounter(counter+1)}>"+"</button>
        <button onClick={() => setCounter(counter-1)}>"-"</button>    

        
    </div>
  );
}

export default App;
