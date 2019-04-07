import React, { Component } from 'react';


export default class CadUser extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            userType: '',
            title: '',
            signature: ''
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

    render() {
        return (
            <div>
                <h1>Cadastro de usuário</h1>
                    Nome:   <input name="name" value={this.state.name} onChange={this.onChange} type='text' /> <br /><br />
                    Título: <input name="title" value={this.state.title} onChange={this.onChange} type='text' /> <br /><br />
                    Email:  <input name="email" value={this.state.email} onChange={this.onChange} type='text' />  <br /><br />
                    Senha:  <input type='password' name="password" value={this.state.password} onChange={this.onChange} /> <br /><br />
                    Assinatura: <input name="signature"value={this.state.signature} onChange={this.onChange} type='text' /> <br /><br />
                    Permissão de usuário: <br />
                    <input type="radio" name="userType" value="admin" onChange={this.onChange} checked={this.state.userType==='admin'} /> Admin <br />
                    <input type="radio" name="userType" value="coordenador" onChange={this.onChange} checked={this.state.userType==='coordenador'} /> Coordenador <br />
                    <input type="radio" name="userType" value="donoCadeira" onChange={this.onChange} checked={this.state.userType==='donoCadeira'} /> Professor Responsável <br />
                    <input type="radio" name="userType" value="professor" onChange={this.onChange}  checked={this.state.userType==='professor'} /> Professor <br />
                <br />
                    <button onClick={this.onSubmit}>Cadastrar</button>
            </div>
        );
    }
}
