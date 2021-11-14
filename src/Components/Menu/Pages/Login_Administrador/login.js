import React, {useState} from "react";
import loginIma from "./images/login.svg";
import {fs} from '../../../../firebase';
import './estilo_Login.css'


const LoginA = () => {

    return (
      <div className="base-containerA">
        <div className="headerA">INICIO DE SESIÓN</div>
        <div className="contentA">
          <div className="imageA">
            <img src={loginIma} />
          </div>
          <div className="formA">
            <div className="form-groupA">
              <label htmlFor="emailA">Correo Electrónico</label>
              <input type="email" name="emailA" placeholder="correo electrónico"/>
            </div>
            <div className="form-groupA">
              <label htmlFor="passwordA">Contraseña</label>
              <input type="password" name="passwordA" placeholder="contraseña"/>
            </div>
          </div>
        </div>
        <div className="footerA">
          <button type="button" className="btnA">
            ENTRAR
          </button>
        </div>
      </div>
    );
}

export default LoginA;