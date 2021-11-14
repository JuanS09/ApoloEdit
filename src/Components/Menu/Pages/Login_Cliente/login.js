import React, { useContext, useState, } from "react";
import loginImg from "./images/login.svg";
import './estilo_LoginReg.css';
import {AuthContext} from './../../../../Auth/Contexts/auth.context';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  Redirect
} from 'react-router-dom';

const Login =()=> {

  const {user} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => setPassword(e.target.value);

  if(user) return (
    <Redirect to='/' />
  );

  const handleClickLogin = () => {
    // añadir validaciones si quieren
    console.log("Iniciando...");

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // hacer cosas luego de iniciar sesion
      console.log("Ya inicie sesion", userCredential);
      /*const user = userCredential.user;
      const uid = user.uid;*/

      // llamar al registro de documento para este usuario
    })
    .catch((error) => {
      console.log("Error al iniciar sesion >>> ", error);
    });
  };

    return (
      <div className="base-container">
        <div className="header">INICIO DE SESIÓN</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="text" name="email" placeholder="correo electrónico"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="contraseña"
                onChange={handleChangePassword}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="button"
            className="btn"
            onClick={handleClickLogin}
          >
            ENTRAR
          </button>
        </div>
      </div>
    );

}

export default Login