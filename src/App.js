import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';


function App() {

  const [count, setCount] = useState(0);

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=98028,us&appid=709847967f5e54b97308c1b2cae4dee5");
    res.json()
      
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
