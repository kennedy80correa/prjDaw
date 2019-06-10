import React, { Component } from 'react';

import api from './services/api'; // import da conexão com a api

import './styles.css';

import Header from './components/Header';
import Routes from './routes'

const App = () => (
  /*
    <LoginTela />
    <CadUser />
    <CadCurso />
    <CadPlanoAula />
    <Dashboard />
    <CadPlanoEnsino />
 */
  <div className='App'>
    <Header />

    <Routes />


  </div>
);

export default App;
