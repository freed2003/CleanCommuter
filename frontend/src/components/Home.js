import { useState } from 'react';

import Mapcontainer from "./Mapcontainer";
import Results from "./Results";

import '../styles/Home.css';

export default function Home() {
    const [isStart, setisStart] = useState(true);
    const [startPos, setStartPos] = useState({lat: 0, lng: 0});
    const [endPos, setEndPos] = useState({lat: 0, lng: 0});
    const [results, setResults] = useState();

    const handleButton = () => {
        let ljson = JSON.stringify(startPos)
        let rjson = JSON.stringify(endPos)
        fetch(`/rankData?lat=${ljson}&lng=${rjson}`)
        .then( res => res.json())
        .then( data => {

        })
    }

    const handleClick = (mapProps, map, clickEvent) => {
        let lat = clickEvent.latLng.lat()
        let lng = clickEvent.latLng.lng()
        if(isStart) {
            setStartPos({lat:lat, lng:lng})
        } else {
            setEndPos({lat:lat, lng:lng})
        }
        setisStart(!isStart);
    }

    return(
        <div className="home">
            <div className="header">

            </div>
            <div className="car">
                {/* <div className="car-title">
                    <p>Vehicle Model</p>
                </div> */}
            </div>
            <div className='map'>
                <Mapcontainer handleClick={handleClick} startPos={startPos} endPos={endPos}/>
                <button className='button' onClick={handleButton}>Click here to submit</button>
            </div>
            <Results results={results} />
        </div>
    )
}