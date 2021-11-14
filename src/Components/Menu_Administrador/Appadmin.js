import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Appadmin.css';

import Navbar from './Navbar';

import Contrato from './Pages/contrato';
import Empleado from "./Pages/empleado";
import Pago from './Pages/pago'
import Averia_Listado from './Pages/averia_listado'
function AppAdmin () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Contrato' exact component={Contrato}/>
        <Route path='/Empleado' exact component={Empleado}/>
        <Route path='/Pago' exact component={Pago}/>
        <Route path='/Averia_Listado' exact component={Averia_Listado}/>
      </Switch>
    </Router>
    
  )
}

export default AppAdmin;
