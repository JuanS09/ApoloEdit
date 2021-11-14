import React from 'react'
import './Estilo_Nosotros/Nosotros.css'

import image1 from '../Images/image-1.png'
import image2 from '../Images/image-2.jpg'
import image3 from '../Images/image-3.png'
import Footer from './Localización_Ubicación/footer'

export default function Nosotros(){
    return (
        <>
            <h1 className='Nosotros'>Nosotros</h1>

            <div className='Principal'>
                <div className='Secundario'>
                    <img className='imagen1'  src= {image1} alt="" />
                    <div>
                        <p className='Texto'>
                            Entregar a nuestro clientes soluciones integrales, confiables e innovadores en telecomunicaciones,
                            tecnología y entretenimiento, comprometidos con brindarles un servicio superior en cada experiencia.
                        </p>
                    </div>
                </div>
                <div className='Secundario'>
                    <img className='imagen2' src= {image2} alt="" />
                    <div>
                        <p className= 'Texto'>
                            Ser la compañia lider de servicios de televisión por cable,
                            preferida por su confiabilidad e innovación.
                        </p>
                    </div>
                </div>
                <div className='Secundario'>
                    <img className='imagen3' src= {image3} alt="" />
                    <div>
                        <h4 className= 'Puntos'>1. Integridad</h4>
                        <h4 className= 'Puntos'>2. Compromiso</h4>
                        <h4 className= 'Puntos'>3. Respeto</h4>
                        <h4 className= 'Puntos'>4. Excelencia</h4>
                        <h4 className= 'Puntos'>5. Trabajo en equipo</h4>
                    </div>
                </div>
            </div>
            <Footer/>
            

            
        </>
    );
}

