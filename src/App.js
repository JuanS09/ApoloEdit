import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Auth/Contexts/auth.context';
import './App.css';


import AppCliente from './Components/Menu_Cliente/Appclientes'; 
import AppAdmin from './Components/Menu_Administrador/Appadmin';
      //Estos dos import son para observar los menus de los dos tipos de usuarios

import Navbar from './Components/Menu/Navbar';

import Ubicacion from './Components/Menu/Pages/Ubicación';
import Nosotros from './Components/Menu/Pages/Nosotros';
import InSeAdministrador from './Components/Menu/Pages/InSeAdministrador';
import InSeCliente from './Components/Menu/Pages/InSeCliente';
import Home from './Components/Menu/Pages/Home';

function App () {
  return (
    //<AppCliente/>
    //<AppAdmin/>
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ubicacion' exact component={Ubicacion} />
          <Route path='/nosotros' exact component={Nosotros} />
          <Route path='/InSeCliente' exact component={InSeCliente} />
          <Route path='/InSeAdministrador' exact component={InSeAdministrador} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;
