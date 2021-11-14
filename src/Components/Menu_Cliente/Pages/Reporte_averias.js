import React, {useEffect, useState} from 'react';
import {fs} from '../../../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import './Reporte_Averias/estilo.css';

const RepAverias = (props) => {
    const [NumeroContrato, setNumeroContrato] = useState("");
    const [DescripciónProblema, setDescripciónProblema] = useState("");
    const [DirecciónCliente, setDirecciónCliente] = useState("");
    const [TipoAveria, setTipoAveria] = useState("");

    let RepAveriasId = '';
    if (props.match) RepAveriasId = props.match.params.RepAveriasId;

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!RepAveriasId) {
        try {
            const docRef =  addDoc(collection(fs, "Reporte Averia"), {
                NumeroContrato,
                DescripciónProblema,
                DirecciónCliente,
                TipoAveria
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          } 
          }
        }
        const Validar = e => {
            e.preventDefault();
        }

        return( <>
        <br/>
        <h2 className='encabezado'>REGISTRO DE AVERÍAS</h2>
        <br/>
        <div className='Contenedor'>  
            <form className = "formula" onSubmit = { Validar } >
                    <div className='formulario-numero'>
                        < label className="form-labR"> NÚMERO DE CONTRATO </label> 
                        <div className="form-grupo-inpR">
                            <input className="form-inpR" placeholder = "Número de contrato"
                            value = {
                                NumeroContrato
                            }
                            onChange = {
                                (e) => setNumeroContrato(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-descripcion'>
                        <label className="form-labR"> DESCRIPCIÓN DEL PROBLEMA</label> 
                        <div className="form-grupo-inpR">
                            <input className="form-inpR" placeholder = "Descripción del problema"
                            value = {
                                DescripciónProblema
                            }
                            onChange = {
                                (e) => setDescripciónProblema(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-direccion'>
                        <label className="form-labR"> DIRECCIÓN</label> 
                        <div className="form-grupo-inpR">
                            <input className="form-inpR" placeholder = "Dirección"
                            value = {
                                DirecciónCliente
                            }
                            onChange = {
                                (e) => setDirecciónCliente(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-tipo'>
                        <label className="form-labR"> TIPO DE AVERÍA</label> 
                        <div className="form-grupo-inpR">
                            <input className="form-inpR" placeholder = "Tipo de avería"
                            value = {
                                TipoAveria
                            }
                            onChange = {
                                (e) => setTipoAveria(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className="form-grupo-form-btn-enviar">
                        <button className="btR"
                        onClick = {handleAgregarClick}>
                        GUARDAR 
                        </button>
                    </div>
                        
                </form>
            </div>   
            <br/>
            <br/>
            
            </>
        )
    
}

export default RepAverias  