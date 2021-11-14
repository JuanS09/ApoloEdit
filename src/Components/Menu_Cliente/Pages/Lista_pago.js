import React, { Component } from 'react'
import LPagos from "./Lista_Pago/tpago";
import BusquedaL from './Lista_Pago/busqueda'

export default class Lista_Pago extends Component {
    render() {
        return (
            <div>
                <br/>
                <BusquedaL/>
                <br/>
                <LPagos/>
            </div>
        )
    }
}
