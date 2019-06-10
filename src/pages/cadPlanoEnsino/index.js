import React, { Component } from 'react';
import axios from 'axios';

export default class CadPlanoEnsino extends Component{
    constructor(){
        super();
        this.state = {
            courseName: '',
            matterName: '',
            teacher: '',
            coordinate: '',
            workLoad: {
                pratice: '',
                theory: ''
            },
            att: '',
            validation: '',
            ementa: '',
            goals: '',
            goals2: '',
            goals3: '',
            content: {
                mod1: '',
                mod2: ''
            },
            methodology: '',
            grade: {
                description: '',
                realGrade: {
                    id: '',
                    activity: '',
                    load: ''
                },
            },
            baseBibliography: {
                name: '',
                num: ''
            },
            bibliography: '',
            ata: '',
            data: '',
            library: {
                title: '',
            },
            memberNDE: '',            

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
            
            axios.post('https://aplicplanos.herokuapp.com/api/teachingplan/', this.state)
              .then(response =>{
                console.log(this.state)
                this.compara(this.state, this.resp)
              })
            .catch(error => {
                    console.log(error)
            })

        };          
        
    }
    render(){
        return(
            <div>
           <h1>Plano de Ensino</h1>
           
           Curso:   
                <select name="courseName" onChange={this.onChange} value={this.state.courseName}>
                    <option value=''>Selecione um curso...</option>
                    <option value='computacao'>Computação</option>
                    <option value='civil'>Civil</option>
                    <option value='mecanica'>Mecanica</option>
                    <option value='eletrica'>Elétrica</option>
                    <option value='quimica'>Química</option>
                    <option value='alimentos'>Alimentos</option>
                    <option value='agronomia'>Agronomia</option>
                    <option value='arquitetura'>Arquitetura e urbanismo</option>
                    <option value='jogos'>Jogos</option>
                </select>
                <br />
                Disciplina: <input name="matterName" value={this.state.matterName} onChange={this.onChange} /><br />
                <br />
                Professor: <input name="teacher" value={this.state.teacher} onChange={this.onChange} /><br />
                <br />
                Coordenador: <input name="coordinate" value={this.state.coordinate} onChange={this.onChange} /><br />
                <br />
                Carga Horária: <br />
                Prática: <input name="workLoad.pratice" value={this.state.workLoad.pratice} onChange={this.onChange} /><br />
                Teórica: <input name="workLoad.theory" value={this.state.workLoad.theory} onChange={this.onChange} /><br />
                <br />
                Att: <input type='date' name="att" value={this.state.att} onChange={this.onChange} /><br />
                <br />
                Validation: <input type='date' name="validation" value={this.state.validation} onChange={this.onChange} /><br />
                <br />
                Ementa: <br /><textarea name="content.ementa" value={this.state.content.ementa} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Objetivo 1: <br /><textarea name="goals" value={this.state.content.goals} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Objetivo 2: <br /><textarea name="goals2" value={this.state.content.goals2} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Objetivo 3: <br /><textarea name="goals3" value={this.state.content.goals3} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Conteúdo: <br />
                <br />
                Módulo 1: <br /><textarea name="content.mod1" value={this.state.content.mod1} onChange={this.onChange} rows={3} cols={40}/><br />
                Módulo 2: <br /><textarea name="content.mod2" value={this.state.content.mod2} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Metodologia: <br /><textarea name="methodology" value={this.state.content.methodology} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Bibliografia: <br /><textarea name="bibliography" value={this.state.content.bibliography} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Ata: <br /><textarea name="ata" value={this.state.content.ata} onChange={this.onChange} rows={3} cols={40}/><br />
                <br />
                Data: <input type='date' name="data" value={this.state.data} onChange={this.onChange} /><br />
                <br />
                Membro do NDE: 
                <select name='memberNDE' onChange={this.onChange} value={this.state.memberNDE}>
                    <option value=''>Selecione uma Membro...</option>
                    <option value='1'>Membro 1</option>
                    <option value='2'>Membro 2</option>
                    <option value='3'>Membro 3</option>
                    <option value='4'>Membro 4</option>
                    <option value='5'>Membro 5</option>
                </select><br />
                <br />

                <button onClick={this.onSubmit}>Cadastrar</button>
           </div>
        );
    }
}
