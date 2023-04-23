import { useState, useEffect } from 'react';

import { GoogleApiWrapper } from 'google-maps-react';

import "../styles/Mapcontainer.css"
import { Container } from '@mui/material';

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
    const [defaultCenter, setdefaultCenter] = useState({lat: 0, lng: 0});
    const [map, setMap] = useState(null);
    const [DR, setDR] = useState(null)
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)


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
        // var center = new props.google.maps.LatLng(defaultCenter.lat, defaultCenter.lng)
        // console.log(center)
        var mapConfig = {
            zoom: 14,
            center: defaultCenter
        }
        let temap = new props.google.maps.Map(document.getElementById('map'), mapConfig)
        let temp1 = new props.google.maps.DirectionsRenderer()
        setDR(temp1)
        setMap(temap)
    }, []);

    useEffect( () => {
        if(map !== null) {
            map.addListener("click", props.handleClick)
        }
    }, [map])

    useEffect( () => {
        if (start === null) {
            var marker = new props.google.maps.Marker({
                position: props.startPos,
            })
            marker.setMap(map)
            setStart(marker)
        } else {
            start.setPosition(props.startPos)
        }
    }, [props.startPos])


    useEffect( () => {
        if (end === null) {
            var marker = new props.google.maps.Marker({
                position: props.startPos,
                map
            })
            marker.setMap(map)
            setEnd(marker)
        } else {
            end.setPosition(props.endPos)
            console.log(end.getPosition().lat())
        }
    }, [props.endPos])

    useEffect(
        () => {
            if (map !== null) {
                map.panTo(defaultCenter)
            }
        }
    , [defaultCenter])

    const drawRoute = () => {
        if (DR !== null) {
            DR.setMap(map)
            if(JSON.stringify(props.route) != '{}') {
                var path = props.route.route
                DR.setDirections(path)
            }
        }
    }

    useEffect( drawRoute,
        [props.route]
    )

    return (
        <div className='mymapcontainer'>
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
