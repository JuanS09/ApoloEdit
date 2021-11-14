import React, {useEffect, useState} from 'react';
import {fs} from '../../../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import './Contrato/estilo.css'
import Busqueda from './Contrato/busqueda';
import TContrato from './Contrato/tcontrato';

const Contrato = (props) => {
    const [ListaContrato, setListaContrato] = useState([]);
    const [Cedula, setCedula] = useState("");
    const [Nombres, setNombres] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Dirección, setDirección] = useState("");
    const [Teléfono, setTeléfono] = useState("");
    const [DescripcionServicio, setDescripcionServicio] = useState("");
    const [CostoServicio, setCostoServicio] = useState("");

    let ContratoId = '';
    if (props.match) ContratoId = props.match.params.ContratoId;

    const listardatos = async () =>{
        const querySnapshot = await getDocs(collection(fs, "Contrato"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    }
    useEffect(() => {
        listardatos()
        }, [])
    
    const getContrato = async () => {
        let obj;
        let lista = []
        const querySnapshot = await fs.collection("Contrato").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj) 
        });
        setListaContrato(lista)
    }
    
    const addContrato = async () => {
        const obj = {Cedula, Nombres, Apellidos, Dirección, Teléfono, DescripcionServicio, CostoServicio}
        const fsRef = await fs.collection("Contrato").add(obj)
        console.log(fsRef.id)
        clearInput()
        getContrato()
    }
    
    const clearInput = () => {
        setCedula('')
        setNombres('')
        setApellidos('')
        setDirección('')
        setTeléfono('')
        setDescripcionServicio('')
        setCostoServicio('')
    }

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!ContratoId) {
        try {
            const docRef =  addDoc(collection(fs, "Contrato"), {
                Cedula,
                Nombres,
                Apellidos,
                Dirección,
                Teléfono,
                DescripcionServicio,
                CostoServicio
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
        <h2 className='encabezadomin'>REGISTRO DE CLIENTES</h2>
        <br/>
        <div className='Contenedormin'>  
            <form className = "formulamin" onSubmit = { Validar } >
                    <div className='formulario-cedula'>
                        < label className="form-labmin"> CÉDULA </label> 
                        <div className="form-grupo-inpmin">
                            <input className="form-inpmin" placeholder = "Cédula"
                            value = {
                                Cedula
                            }
                            onChange = {
                                (e) => setCedula(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-nombre'>
                        <label className="form-labmin"> NOMBRES</label> 
                        <div className="form-grupo-inpmin">
                            <input className="form-inpmin" placeholder = "Nombres"
                            value = {
                                Nombres
                            }
                            onChange = {
                                (e) => setNombres(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-apellido'>
                        <label className="form-labmin"> APELLIDOS</label> 
                        <div className="form-grupo-inpmin">
                            <input className="form-inpmin" placeholder = "Apellidos"
                            value = {
                                Apellidos
                            }
                            onChange = {
                                (e) => setApellidos(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-direccion'>
                        <label className="form-labmin"> DIRECCIÓN</label> 
                        <div className="form-grupo-inpmin">
                            <input className="form-inpmin" placeholder = "Dirección"
                            value = {
                                Dirección
                            }
                            onChange = {
                                (e) => setDirección(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-telefono'>
                        <label className="form-labmin"> TELÉFONO</label> 
                        <div className="form-grupo-inpmin">
                            <input className="form-inpmin" placeholder = "Teléfono"
                            value = {
                                Teléfono
                            }
                            onChange = {
                                (e) => setTeléfono(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-descripción'>
                        <label className="form-labmin"> DESCRIPCIÓN DEL SERVICIO </label> 
                        <div className="form-grupo-inpmin">
                            <input className="form-inpmin" placeholder = "Descripción del servicio"
                            value = {
                                DescripcionServicio
                            }
                            onChange = {
                                (e) => setDescripcionServicio(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className='formulario-costo'>
                        <label className="form-labmin"> COSTO DEL SERVICIO</label>
                        <div className="form-grupo-inpmin"> 
                            <input className="form-inpmin" placeholder = "Costo del servicio"
                            value = {
                                CostoServicio
                            }
                            onChange = {
                                (e) => setCostoServicio(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className="form-grupo-form-btn-enviarmin">
                        <button className="btmin"
                        onClick = {handleAgregarClick}>
                        GUARDAR 
                        </button>
                    </div>
                </form>
                
            </div>
            <br/>
            <Busqueda/>
            <br/>
            <TContrato/>
            { <div>
                {ListaContrato.map((Contrato, index) => {
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Contrato.Cedula}</td>
                        <td>{Contrato.Nombres}</td>
                        <td>{Contrato.Apellidos}</td>
                        <td>{Contrato.Dirección}</td>
                        <td>{Contrato.Teléfono}</td>
                        <td>{Contrato.DescripcionServicio}</td>
                        <td>{Contrato.CostoServicio}</td>
                    </tr>
                })}
            </div>}
            
            </>
        )
    
}

export default Contrato;   