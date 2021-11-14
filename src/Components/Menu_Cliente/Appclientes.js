import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Appclientes.css';

import Navbar from './Navbar';

import Lista_Pago from './Pages/Lista_pago';
import RepAverias from './Pages/Reporte_averias';

function AppCliente () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Lista_pago' exact component={Lista_Pago} />
        <Route path='/Reporte_averias' exact component={RepAverias} />
      </Switch>
    </Router>
    
  )
}

export default AppCliente;
