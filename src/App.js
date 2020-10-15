import React, {useState, useEffect} from 'react';
import './App.css';
import fetch from 'node-fetch';


function App() {

  const [zip, setZip] = useState(98028);

  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&appid=709847967f5e54b97308c1b2cae4dee5");
    res
      .json()
      .then(res => setPlanets(res))
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);  

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => setZip(10029)}>
        Click me {zip}
      </button>       
      {JSON.stringify(planets)}
        
      </header>
      }
    </div>
  );
}

export default App;
