import React, { Component } from 'react';
import axios from 'axios';


export default class CadCurso extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            matter: '',
            coordinate: '',
            description: '',
            createdAt: ''

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
            
         
            axios.post('https://aplicplanos.herokuapp.com/api/course/', this.state)
              .then(response =>{
                console.log(this.state)
                this.compara(this.state, this.resp)
              })
            .catch(error => {
                    console.log(error)
            })
            
        };
    }

    render() {
        return (
            <div>
                <h1>Cadastro de curso</h1>
                Nome:   <input name="name" value={this.state.name} onChange={this.onChange} type='text' /> <br /><br />
                Disciplinas: <br /><textarea name="matter" value={this.state.matter} onChange={this.onChange} rows={3} cols={40} /><br />
                <br />
                Coordenador: <input name="coordinate" value={this.state.coordinate} onChange={this.onChange} /><br />
                <br />
                Descrição: <br /><textarea name="description" value={this.state.description} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Criado em: <input type='date' name="createdAt" value={this.state.createdAt} onChange={this.onChange} /><br />
                <br />
                    
                    <button type='submit' onClick={this.onSubmit}>Cadastrar</button>
            </div>
        );
    }
}
