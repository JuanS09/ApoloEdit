import React from 'react'
import Footer from './Localización_Ubicación/footer';
import MapView from'./Localización_Ubicación/mapView'

export default function Ubicacion(){
    return (
        <>
            <div className= 'Pn'>
                <h1 className='Ubicacion'>UBICANOS</h1>
                <MapView/>
            </div>
            <Footer/>
            
        </>
    );
}

