import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CadCurso from '../CadCurso';
import CadUser from '../cadUser';
import CadPlanoAula from '../cadPlanoAula';
import CadPlanoEnsino from '../cadPlanoEnsino';

export default class Dashboard extends Component{
    render(){
        return(
            <Router>
                <div>
                    <h1>Dashboard</h1>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/cadCurso">Cadastrar Curso</Link></li>
                        <li><Link to="/cadPlanoAula">Cadastrar Plano de Aula</Link></li>
                        <li><Link to="/cadPlanoEnsino">Cadastrar Plano de Ensino</Link></li>
                        <li><Link to="/cadUser">Cadastrar Usuário</Link></li>

                    </ul>

                    <Route exact path='/' component={Dashboard} />
                    <Route path='/cadCurso' component={Curso} />
                    <Route path='/cadPlanoAula' component={Aula} />
                    <Route path='/cadPlanoEnsino' component={Ensino} />
                    <Route path='/cadUser' component={User} />

                </div>
            </Router>
           

        );
    }
}



function Curso () {
    return (
        <div>
            <CadCurso />
        </div>
    );
}

function User () {
    return (
        <div>
            <CadUser />
        </div>
    );
}

function Aula () {
    return (
        <div>
            <CadPlanoAula />
        </div>
    );
}

function Ensino () {
    return (
        <div>
            <CadPlanoEnsino />
        </div>
    );
}