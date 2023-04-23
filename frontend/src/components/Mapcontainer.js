import { useState, useEffect, useRef } from 'react';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import "../styles/Mapcontainer.css"

export function Mapcontainer(props) {
  // const style = {
  //   width: '100%', 
  //   height: '30%',
  //   margin: 'auto',
  //   position: 'relative',
  // }

  // const containerStyle = {
  //   // display: 'block',
  //   // height: '50vh',
  //   // margin: '50vh 0 0 0',
  // }
  const style = {
    width: '60%',
    left: '30%',
    height: '50%',
    margin: 'auto'
  }

  const containerStyle = {
    display: 'flex',
    position: 'static',
    width: '100%',
    height: '30%'
  }
    
    const [defaultCenter, setdefaultCenter] = useState({lat: 0, lng: 0});
    const [map, setMap] = useState(null);
    const [DR, setDR] = useState(null)

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
        var center = new props.google.maps.LatLng(defaultCenter.lat, defaultCenter.lng)
        var mapConfig = {
            center: center
        }
        console.log(document.getElementById('map'))
        setMap(new props.google.maps.Map(document.getElementById('map'), mapConfig))
        setDR(new props.google.maps.DirectionsRenderer())
        DR.setMap(map)
    }, []);


    const drawRoute = () => {
        if(JSON.stringify(props.route) != '{}') {
            var path = props.route.route
            DR.setDirections(path)
        }
    }

    useEffect( drawRoute,
        [props.route]
    )

    return (
        <div className='mapcontainer'>
            <div id='map'>
                Loading map...
            </div>
        {/* <Map
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
        </Map> */}
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC_NaASRTc9GaYjIplS5EhYE8qUiprjLhU'
}) (Mapcontainer)
