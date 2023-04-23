import { useState, useEffect } from 'react';

import { GoogleApiWrapper } from 'google-maps-react';

import { stylesarray } from "../styles/mapstyle.js"
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

    const [defaultCenter, setdefaultCenter] = useState({lat: 34.0689, lng: -118.4452});
    const [map, setMap] = useState(null);
    const [DR, setDR] = useState(null)
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)


    useEffect( () => {
        // if (navigator && navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(pos => {
        //         const coords = pos.coords;
        //         console.log(coords);
        //         setdefaultCenter({
        //             lat: coords.latitude,
        //             lng: coords.longitude
        //         })
        //     })
        // }
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
            console.log(stylesarray)
            map.setOptions({styles: stylesarray})
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
            DR.setMap(null)
            let DR1 = new props.google.maps.DirectionsRenderer()
            DR1.setMap(map)
            let DS = new props.google.maps.DirectionsService()
            DS.route({
                origin: props.startPos,
                destination: props.endPos,
                optimizeWaypoints: true,
                travelMode: props.route.method.toUpperCase()
            }, (res, stat) => {
                if (stat === 'OK') {
                    DR1.setDirections(res)
                } else {
                    window.alert('Problem in showing direction due to ' + stat)
                }
            })
            setDR(DR1)   
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
