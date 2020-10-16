import React, {useState, useEffect} from 'react';
import './App.css';
import fetch from 'node-fetch';


function App() {

  const [zip, setZip] = useState(98028);

  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip +",us&appid=709847967f5e54b97308c1b2cae4dee5");
    res
      .json()
      .then(res => setData(res))
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
      <h1 className='text'>{(data?.name)}</h1>
      <h1 className='text'>{(data?.weather?.[0]?.description)}</h1>
      <h1 className='temp'>{Math.floor(data?.main?.temp - 273.15)}˚</h1>
      <div><span>{Math.floor(data?.main?.temp_min - 273.15)}˚</span> <span>{Math.floor(data?.main?.temp_max - 273.15)}˚</span></div>
      
      {JSON.stringify(data)}
        
      </header>
      }
    </div>
  );
}

export default App;
