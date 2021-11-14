import React from 'react'
import './busqueda.css'



function Busqueda() {
    return (
        <div>
            <div className='container-4'>
                <input type="search" id="search" placeholder="INGRESAR DATOS A BUSCAR" />
                <button class="icon"><i class="fa fa-search"></i></button>
            </div>
        </div>
    )
}

export default Busqueda
