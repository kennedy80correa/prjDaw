import React, { Component } from 'react';
import './styles.css';

export default class LoginTela extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = (evento) => {
            const state = Object.assign({}, this.state);
            const campo = evento.target.name;
            state[campo] = evento.target.value;
            this.setState(state);
        };
        this.onSubmit = (evento) => {
            //função para enviar formulário
            console.log(this.state);
            
        };
    }
    render(){
        return(
            <div className='login'>
           <h1>Login</h1>
           <span className='label'>Email:</span> <input className='inputEmail' name='email' value={this.state.email} onChange={this.onChange} /><p />
           <span className='label'>Senha:</span> <input className='inputSenha' name='password' value={this.state.password} onChange={this.onChange} type='password' /><br />

           <button className='entrar' onClick={this.onSubmit}>Entrar</button>
           </div>
        );
    }
}

