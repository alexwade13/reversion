import React, {useState, useEffect} from 'react';
import './App.css';
import fetch from 'node-fetch';
import _ from 'lodash'


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
  }, [zip]);  

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <span className="place">{(_.startCase(_.toLower(data?.name)))}</span>
        <img src={"http://openweathermap.org/img/wn/"+ data?.weather?.[0]?.icon + ".png"}/>
      </div>
      <div className="description">{(_.startCase(_.toLower(data?.weather?.[0]?.description)))}</div>
      <h1 className='temp'>{Math.floor(data?.main?.temp - 273.15)}˚</h1>
      <div><span>{Math.floor(data?.main?.temp_min - 273.15)}˚</span> <span>{Math.floor(data?.main?.temp_max - 273.15)}˚</span></div>
      <hr/>

      <div>
        <label for="input">Zip Code:</label>
        <div>

          <input id="input"></input>
          <button className="myButton" onClick={() => {          
            let input = document.getElementById("input").value
            setZip(input)
          }}>
            Update
          </button>
        </div>
      </div>
        
      </header>
      }
    </div>
  );
}

export default App;
