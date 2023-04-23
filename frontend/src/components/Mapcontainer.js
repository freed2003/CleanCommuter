import { useState, useEffect } from 'react';

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

  const [defaultCenter, setdefaultCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
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
    <Map
      style={style}
      containerStyle={containerStyle}
      google={props.google}
      onClick={props.handleClick}
      center={defaultCenter}
      centerAroundCurrentLocation
    >
      <Marker
        title="Start"
        name="start"
        position={props.startPos}
      />
      <Marker
        title="End"
        name="end"
        position={props.endPos}
      />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC_NaASRTc9GaYjIplS5EhYE8qUiprjLhU'
})(Mapcontainer)
