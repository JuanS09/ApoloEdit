import React from "react";
import loginImg from "./images/login.svg";
import './estilo_LoginReg.css';
const Register=()=> {
  
  
  return (
      <div className="base-container">
        <div className="header">REGISTRO DE USUARIO</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="numerocontrato">Número de Contrato</label>
              <input type="text" name="numerocontrato" placeholder="número de contrato" required/>
            </div>
            <div className="form-group">
              <label htmlFor="nombrecompleto">Nombre Completo</label>
              <input type="text" name="nombrecompleto" placeholder="nombre completo" />
            </div>
            <div className="form-group">
              <label htmlFor="correoelectronico">Correo Electrónico</label>
              <input type="text" name="correoelectronico" placeholder="correo electrónico"/>
            </div>
            <div className="form-group">
              <label htmlFor="contraseña">Contraseña</label>
              <input type="text" name="contraseña" placeholder="contraseña"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            REGISTRATE
          </button>
        </div>
      </div>
    );

}

export default Register;