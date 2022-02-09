import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const AnyReactComponent = ({ text }) => <MarkerStyle >
    <img src="/img/maps/marker.png" />

    
    
</MarkerStyle>;

const MarkerStyle= styled.div`
    width:38px;
    img{
        width:100%;
    }
`

const Maps = () => {
    const coordinates = { lat:47.916136, lng: 106.918756}
    const [ targetLoc, setTargetLoc ] = useState({ lat: 47.92478726857837, lng:106.90216944047546 })

    const LoactionHandle = (e) =>{
        setTargetLoc({lat:e.lat, lng: e.lng})
    }

    return (
        // <Container >
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA70FyK0IXccej33Oj3k7decCj5UsIYt0Y' }} // maps deer boldog
                // bootstrapURLKeys={{ key: 'AIzaSyCnjS5trCmuXQ8pddiC8tAXXSntdvtKSmg' }}
                defaultCenter={coordinates}
                defaultZoom={15}
                margin={[50,50,50,50]}
                onClick={e => LoactionHandle(e) }
            >
            <AnyReactComponent
                lat={targetLoc.lat}
                lng={targetLoc.lng}
                // {...targetLoc}
                text="My Marker"
            />
            </GoogleMapReact>
        // </Container>
    )
}

export default Maps

