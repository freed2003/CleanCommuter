import { useState, useEffect, useRef } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import "../styles/Mapcontainer.css"

export function Mapcontainer(props) {
    const mapRef = useRef(null)

    const style = {
        width: '100%', 
        height: '30%',
        margin: 'auto'
    }

    const containerStyle = {
        display: 'flex',
        position: 'static',
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


    const drawRoute = () => {
        console.log(props.route)
        if(JSON.stringify(props.route) != '{}') {
            var path = props.route.route
            console.log("not good")
            var DR = new props.google.maps.DirectionsRenderer
            console.log(mapRef)
            var map = new props.google.maps.Map(mapRef, mapProps)
            console.log(map)
            DR.setMap(map)
            DR.setDirections(path)
        }
    }

    useEffect( drawRoute,
        [props.route]
    )

    return (
        <div className='mapcontainer'>
        <Map
            ref={mapRef}
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
    apiKey: 'AIzaSyC_NaASRTc9GaYjIplS5EhYE8qUiprjLhU'
}) (Mapcontainer)