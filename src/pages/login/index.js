import React, { Component } from 'react';
import axios from 'axios';
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
            evento.preventDefault()
            
         
            axios.post('https://api.github.com/users/mariaclarabs', this.state)
              .then(response =>{
                console.log(this.state)
                this.compara(this.state, this.resp)
              })
            .catch(error => {
                    console.log(error)
            })
            
        };

        this.resp = () => {
            axios.get('https://api.github.com/users/mariaclarabs')
            .then((response) => {
                console.log(response.data.name);
                //if((response.data.name) == ('clarabs'/*this.onSubmit.state.email*/)){console.log('fooooooooooooooiiiiiiiiiiii')};
                //console.log(response.data.user.email);
            });
         };

        this.compara = () => {
            if((this.resp.name) == (this.state.name)){
                console.log('Login realizado com sucesso!!!')
            }
        }
    }        

    render(){
        return(
            <div className='login'>
           <h1>Login</h1>
           <span className='label'>Email:</span> <input className='inputEmail' name='email' value={this.state.email} onChange={this.onChange} /><p />
           <span className='label'>Senha:</span> <input className='inputSenha' name='password' value={this.state.password} onChange={this.onChange} type='password' /><br />
           <button type="submit" className='entrar' onClick={this.onSubmit}>Entrar</button>
           </div>
           
        );
    }
}

//<button onClick={this.resp}>funcao</button>