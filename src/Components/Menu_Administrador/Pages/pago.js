import React, {useEffect, useState} from 'react';
import {fs} from '../../../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import './Pago/estilo.css'
import BusquedaP from './Pago/busqueda'
import TPagos from './Pago/tpago';

const Pagos = (props) => {
    const [ListaPagos, setListaPagos] = useState([]);
    const [CedulaCliente, setCedulaCliente] = useState("");
    const [NombresCliente, setNombresCliente] = useState("");
    const [ApellidosCliente, setApellidosCliente] = useState("");
    const [DirecciónCliente, setDirecciónCliente] = useState("");
    const [Retraso, setRetraso] = useState("");
    const [Subtotal, setSubtotal] = useState("");

    let PagosId = '';
    if (props.match) PagosId = props.match.params.ContratoId;

    const listardatos = async () =>{
        const querySnapshot = await getDocs(collection(fs, "Pagos"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    }
    useEffect(() => {
        listardatos()
        }, [])
    
    const getPagos = async () => {
        let obj;
        let lista = []
        const querySnapshot = await fs.collection("Pagos").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj) 
        });
        setListaPagos(lista)
    }
    
    const addPago = async () => {
        const obj = {CedulaCliente, NombresCliente, ApellidosCliente, DirecciónCliente, Retraso, Subtotal}
        const fsRef = await fs.collection("Pagos").add(obj)
        console.log(fsRef.id)
        clearInput()
        getPagos()
    }
    
    const clearInput = () => {
        setCedulaCliente('')
        setNombresCliente('')
        setApellidosCliente('')
        setDirecciónCliente('')
        setRetraso('')
        setSubtotal('')
    }

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!PagosId) {
        try {
            const docRef =  addDoc(collection(fs, "Pagos"), {
                CedulaCliente,
                NombresCliente,
                ApellidosCliente,
                DirecciónCliente,
                Retraso,
                Subtotal
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
        <h2 className='encabezadoP'>REGISTRO DE PAGOS</h2>
        <br/>
        <div className='ContenedorP'>  
            <form className = "formulaP" onSubmit = { Validar } >
                    <div className='formulario-cedula'>
                        < label className="form-labP"> CÉDULA </label> 
                        <div className="form-grupo-inpP">
                            <input className="form-inpP" placeholder = "Cédula"
                            value = {
                                CedulaCliente
                            }
                            onChange = {
                                (e) => setCedulaCliente(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-nombre'>
                        <label className="form-labP"> NOMBRES</label> 
                        <div className="form-grupo-inpP">
                            <input className="form-inpP" placeholder = "Nombres"
                            value = {
                                NombresCliente
                            }
                            onChange = {
                                (e) => setNombresCliente(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-apellido'>
                        <label className="form-labP"> APELLIDOS</label> 
                        <div className="form-grupo-inpP">
                            <input className="form-inpP" placeholder = "Apellidos"
                            value = {
                                ApellidosCliente
                            }
                            onChange = {
                                (e) => setApellidosCliente(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-direccion'>
                        <label className="form-labP"> DIRECCIÓN</label> 
                        <div className="form-grupo-inpP">
                            <input className="form-inpP" placeholder = "Dirección"
                            value = {
                                DirecciónCliente
                            }
                            onChange = {
                                (e) => setDirecciónCliente(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-retraso'>
                        <label className="form-labP"> RETRASO</label> 
                        <div className="form-grupo-inpP">
                            <input className="form-inpP" placeholder = "Retraso"
                            value = {
                                Retraso
                            }
                            onChange = {
                                (e) => setRetraso(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-subtotal'>
                        <label className="form-labP"> SUBTOTAL</label> 
                        <div className="form-grupo-inpP">
                            <input className="form-inpP" placeholder = "Subtotal"
                            value = {
                                Subtotal
                            }
                            onChange = {
                                (e) => setSubtotal(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    
                    <div className="form-grupo-form-btn-enviarP">
                        <button className="btP"
                        onClick = {handleAgregarClick}>
                        GUARDAR 
                        </button>
                    </div>
                </form>
            </div>   
            <br/>
            <BusquedaP/>
            <br/>
            <TPagos/>
            { <div>
                {ListaPagos.map((Pago, index) => {
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Pago.CedulaCliente}</td>
                        <td>{Pago.NombresCliente}</td>
                        <td>{Pago.ApellidosCliente}</td>
                        <td>{Pago.DirecciónCliente}</td>
                        <td>{Pago.Retraso}</td>
                        <td>{Pago.Subtotal}</td>
                    </tr>
                })}
            </div>}
            </>
        )
    
}

export default Pagos  