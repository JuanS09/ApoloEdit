import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './Ubicacion.css'
import L from 'leaflet'

import iconretinaurl from 'leaflet/dist/images/marker-icon-2x.png'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconRetinaUrl: iconretinaurl,
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [11.972535,-85.1729578]

class MapView extends React.Component{
    render (){ 
            return <MapContainer center={position} zoom={13}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} >
                    <Popup>
                        TV Cable Acoyapa Apolo 11
                    </Popup>
                </Marker>
        </MapContainer>
    }
}

export default MapView;