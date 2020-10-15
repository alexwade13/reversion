import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';


function App() {

  const [count, setCount] = useState(0);

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    console.log("test")
    fetchData();
  });  

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>       
      {JSON.stringify(planets)}
        
      </header>
      }
    </div>
  );
}

export default App;
