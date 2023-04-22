import { useState, useEffect } from 'react';

import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export function Mapcontainer(props) {

    const [defaultCenter, setdefaultCenter] = useState({lat: 0, lng: 0});
    const [isStart, setisStart] = useState(true);
    const [startPos, setStartPos] = useState({lat: 0, lng: 0});
    const [endPos, setEndPos] = useState({lat: 0, lng: 0});

    useEffect( () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                console.log(coords)
                setdefaultCenter({
                    lat: coords.latitude,
                    lng: coords.longitude
                })
            })
        }
    }, []);

    const handleSubmit = () => {
        ljson = JSON.stringify(startPos)
        rjson = JSON.stringify(endPos)
        fetch(`/rankData?lat={ljson}&lng={rjson}`).then(
            (res) => res.json()
        )
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

    return (
        <>
        <Map
            style={{width: 500, height: 500, position: 'absolute'}}
            google={props.google}
            onClick={handleClick}
            center={defaultCenter}
            centerAroundCurrentLocation
        >
            <Marker
                title = "Start"
                name = "start"
                position={startPos}
            />
            <Marker
                title = "End"
                name = "end"
                position={endPos}
            />
        </Map>
        <button onSubmit={handleSubmit}></button>
        </>
    )
}

export default GoogleApiWrapper({
    apikey: 'AIzaSyC_NaASRTc9GaYjIplS5EhYE8qUiprjLhU'
}) (Mapcontainer)