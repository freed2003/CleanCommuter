import { useState, useEffect } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import "../styles/Mapcontainer.css"

export function Mapcontainer(props) {
    const style = {
        display: 'block',
        margin: 'auto',
        width: '100%', 
        height: '100%',
    }

    const containerStyle = {
        position: 'relative',
        top: '30px',
        width: '100%',
        height: '30%'
    }

    const [defaultCenter, setdefaultCenter] = useState({lat: 0, lng: 0});

    useEffect( () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                setdefaultCenter({
                    lat: coords.latitude,
                    lng: coords.longitude
                })
            })
        }
    }, []);


    return (
        <div className='mapcontainer'>
        <Map
            style={style}
            containerStyle={containerStyle}
            google={props.google}
            onClick={props.handleClick}
            center={defaultCenter}
            centerAroundCurrentLocation
        >
            <Marker
                title = "Start"
                name = "start"
                position={props.startPos}
            />
            <Marker
                title = "End"
                name = "end"
                position={props.endPos}
            />
        </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apikey: 'AIzaSyC_NaASRTc9GaYjIplS5EhYE8qUiprjLhU'
}) (Mapcontainer)