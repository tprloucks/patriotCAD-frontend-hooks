import React, {useState} from 'react'
import ReactMapGL from "react-map-gl"

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 32.78306,
        longitude: -96.80667,
        zoom: 10,
        width: "75vw",
        height: "60vh",
        marginLeft: "20px"
    })
    return (
        <div>
        
            <div>
        <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/tprloucks/ckrnw8nnnawfo17o2135rug0f"
        onViewportChange={viewport=>{
            setViewport(viewport)
        }}
        >
            
            
        </ReactMapGL>
        </div>
        
    </div>
    )
}

export default Map
