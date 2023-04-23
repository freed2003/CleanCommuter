import { useEffect, useState } from 'react';
import Mapcontainer from "./Mapcontainer";
import Results from "./Results";
import '../styles/Home.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function Home() {
  const [isStart, setisStart] = useState(false);
  const [startPos, setStartPos] = useState({ lat: 0, lng: 0 });
  const [endPos, setEndPos] = useState({ lat: 0, lng: 0 });
  const [models, setModels] = useState([]);
  const [results, setResults] = useState(undefined);
  const [route, setRoute] = useState({});

  const handleButton = () => {
      let ljson = JSON.stringify(startPos)
      let rjson = JSON.stringify(endPos)
      fetch(`/rankData?start=${ljson}&end=${rjson}`)
      .then( res => res.json())
      .then( data => {
          setRoute(data.best_route)
      })
  }
  /* fetch list of car models */
  useEffect(() => {
    fetch('/models')
      .then(res => res.json())
      .then(data => {
        setModels(data.models);
      });
  }, []);

  const handleClick = (clickEvent) => {
    setisStart(true)
    let lat = clickEvent.latLng.lat()
    let lng = clickEvent.latLng.lng()
    console.log(isStart)
    
    if (isStart) {
      
      setStartPos({ lat: lat, lng: lng })
    } else {
      
      setEndPos({ lat: lat, lng: lng })
    }
    
  }

  return (
    <div className="home">
      <div className="header">
      </div>
      <div className="car">
        <h className="car-title">
          Vehicle model
          <Autocomplete
          disablePortal
          id="model-selector"
          options={models}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} model='model' />}
        />
        </h>
        
      </div>
      {/* <div className='map'> */}
          <Mapcontainer handleClick={handleClick} startPos={startPos} endPos={endPos} route = {route}/>
      {/* </div> */}
      <div>
          <button className='button' onClick={handleButton}>Click here to submit</button>
      </div>
      {results != undefined && <Results results={results} />}
    </div>
  )
}