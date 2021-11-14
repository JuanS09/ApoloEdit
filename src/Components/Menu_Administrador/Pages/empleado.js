import React, {useEffect, useState} from 'react';
import {fs} from '../../../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';
import './Empleado/estilo.css'
import BusquedaE from './Empleado/busqueda';
import TEmpleados from './Empleado/templeado';

const Empleado = (props) => {
    const [listaEmpleados, setListaEmpleados] = useState([]);
    const [Cedula, setCedula] = useState("");
    const [Nombres, setNombres] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Dirección, setDirección] = useState("");
    const [Teléfono, setTeléfono] = useState("");

    let EmpleadoId = '';
    if (props.match) EmpleadoId = props.match.params.EmpleadoId;

    const listardatos = async () =>{
        const querySnapshot = await getDocs(collection(fs, "Empleados"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    }
    useEffect(() => {
        listardatos()
        }, [])
    
    const getEmpleados = async () => {
        let obj;
        let lista = []
        const querySnapshot = await fs.collection("Empleados").get();
        querySnapshot.forEach((doc) => {
            obj = doc.data()
            obj.id = doc.id
            lista.push(obj) 
        });
        setListaEmpleados(lista)
    }
    
    const addEmpleado = async () => {
        const obj = {Cedula, Nombres, Apellidos, Dirección, Teléfono}
        const fsRef = await fs.collection("Empleados").add(obj)
        console.log(fsRef.id)
        clearInput()
        getEmpleados()
    }
    
    const clearInput = () => {
        setCedula('')
        setNombres('')
        setApellidos('')
        setDirección('')
        setTeléfono('')
    }

    const handleAgregarClick = (e) => {
        e.preventDefault();
        if (!EmpleadoId) {
        try {
            const docRef =  addDoc(collection(fs, "Empleados"), {
                Cedula,
                Nombres,
                Apellidos,
                Dirección,
                Teléfono
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
        <h2 className='encabezadoE'>REGISTRO DE EMPLEADOS</h2>
        <br/>
        <div className='ContenedorE'>  
            <form className = "formulaE" onSubmit = { Validar } >
                    <div className='formulario-cedula'>
                        < label className="form-labE"> CÉDULA </label> 
                        <div className="form-grupo-inpE">
                            <input className="form-inpE" placeholder = "Cédula"
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
                        <label className="form-labE"> NOMBRES</label> 
                        <div className="form-grupo-inpE">
                            <input className="form-inpE" placeholder = "Nombres"
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
                        <label className="form-labE"> APELLIDOS</label> 
                        <div className="form-grupo-inpE">
                            <input className="form-inpE" placeholder = "Apellidos"
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
                        <label className="form-labE"> DIRECCIÓN</label> 
                        <div className="form-grupo-inpE">
                            <input className="form-inpE" placeholder = "Dirección"
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
                        <label className="form-labE"> TELÉFONO</label> 
                        <div className="form-grupo-inpE">
                            <input className="form-inpE" placeholder = "Teléfono"
                            value = {
                                Teléfono
                            }
                            onChange = {
                                (e) => setTeléfono(e.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className="form-grupo-form-btn-enviarE">
                        <button className="btE"
                        onClick = {handleAgregarClick}>
                        GUARDAR 
                        </button>
                    </div>
                </form>

            </div>   
            <br/>
            <BusquedaE/>
            <br/>
            <TEmpleados/>                
            { <div>
                {listaEmpleados.map((Empleados, index) => {
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{Empleados.Cedula}</td>
                        <td>{Empleados.Nombres}</td>
                        <td>{Empleados.Apellidos}</td>
                        <td>{Empleados.Dirección}</td>
                        <td>{Empleados.Teléfono}</td>
                    </tr>
                })}
            </div>}
            </>
        )
        
    
}

export default Empleado