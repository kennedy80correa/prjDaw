import React, { Component } from 'react';

import api from './services/api'; // import da conexão com a api

import './styles.css';

import Header from './components/Header';
import LoginTela from './pages/login';
import CadUser from './pages/cadUser';
import Dashboard from './pages/dashboard';
import CadPlanoEnsino from './pages/cadPlanoEnsino';
import CadPlanoAula from './pages/cadPlanoAula';
import CadCurso from './pages/CadCurso';

const App = () => (
  /*
  <LoginTela />
  <CadCurso />
  <CadPlanoAula />
  <Dashboard />
  <CadPlanoEnsino />
 */
  <div className='App'>
    <Header />

 
    <CadUser />
  </div>
);

export default App;
