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
            if (map !== null) {
                var marker = new props.google.maps.Marker({
                    position: props.startPos,
                })
                marker.setMap(map)
                setStart(marker)
            }
        } else {
            start.setPosition(props.startPos)
        }
    }, [props.startPos, map])


    useEffect( () => {
        if (end === null) {
            if (map !== null) {
                var marker = new props.google.maps.Marker({
                    position: props.startPos,
                    map
                })
                marker.setMap(map)
                setEnd(marker)
            }
        } else {
            end.setPosition(props.endPos)
        }
    }, [props.endPos, map])

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
                let bounds = path.routes[0].bounds
                let north = bounds.northeast.lat
                let east = bounds.northeast.lng
                let south = bounds.southwest.lat
                let west = bounds.southwest.lng
                console.log(path)
                path.routes[0].bounds = {
                    north: north,
                    east: east,
                    south: south,
                    west: west
                }
                console.log(path)
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
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC_NaASRTc9GaYjIplS5EhYE8qUiprjLhU'
}) (Mapcontainer)
