import React, { Component } from 'react';
import api from '../../services/api';
import axios from  'axios';

export default class CadPlanoAula extends Component {
    constructor() {
        super();
        this.state = {
            courseName: '',
            year: '',
            semester: '',
            matterName: '',
            workload: {
                pratice: '',
                theory: ''
            },
            email: '',
            codeClass: '',
            coordinate: '',
            teacher: '',
            content: [{
                week: '',
                date: '',
                tp: '',
                conteudo: '',
                bibliography: ''
            }],
            bibliography: {
                type: '',
                name: '',
                num: ''
            },
            grade: {
                id: '',
                activity: '',
                description: '',
                load: ''
            },
            data: '',
            teacherSignature: '',
            coordinateSignature: ''
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
            
            axios.post('https://aplicplanos.herokuapp.com/api/classplan/', this.state)
              .then(response =>{
                console.log(this.state)
                this.compara(this.state, this.resp)
              })
            .catch(error => {
                    console.log(error)
            })

        };
        
    }
    //content[i].conteudo
    render() {
        return (
            //criar foreach para   courseNames vindos da api
            <div className='PlanoAula'>
                <h1>Plano de Aula</h1>
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
                <br />
                Ano: <input name="year" value={this.state.year} onChange={this.onChange} /><br />
                <br />
                Semestre: <input name="semester" value={this.state.semester} onChange={this.onChange} /><br />
                <br />
                Disciplina: <input name="matterName" value={this.state.matterName} onChange={this.onChange} /><br />
                <br />
                Carga Horária:
                Teórica<input name="workloadT" value={this.state.workload.theory} onChange={this.onChange} />
                Prática<input name="workloadP" value={this.state.workload.pratice} onChange={this.onChange} /><br />
                <br />
                Email: <input name="email" value={this.state.email} onChange={this.onChange} /><br />
                <br />
                Coordenador: <input name="coordinate" value={this.state.coordinate} onChange={this.onChange} /><br />
                <br />
                Professor: <input name="teacher" value={this.state.teacher} onChange={this.onChange} /><br />
                <br />
                Conteúdo: 
                <br /><textarea name="content.conteudo" value={this.state.content.conteudo} onChange={this.onChange} rows={3} cols={40} /><br />
                <br />
                Semana: <input name="content.week" value={this.state.content.week} onChange={this.onChange} /><br />
                <br />
                Data: <input type='date' name="content.date" value={this.state.content.date} onChange={this.onChange} /><br />
                <br />
                Aula: <br />
                <input type="radio" name="tp" value="theory" onChange={this.onChange} checked={this.state.tp === 'theory'} /> Teórica <br />
                <input type="radio" name="tp" value="pratice" onChange={this.onChange} checked={this.state.tp === 'pratice'} /> Prática <br />
                <br />
                Turma:
                <select name='codeClass' onChange={this.onChange} value={this.state.codeClass}>
                    <option value=''>Selecione uma turma...</option>
                    <option value='1'>turma 1</option>
                    <option value='2'>turma 2</option>
                    <option value='3'>turma 3</option>
                    <option value='4'>turma 4</option>
                    <option value='5'>turma 5</option>
                </select><br />
                <br />
                Bibliografia: <br /><textarea name="content.bibliography" value={this.state.content.bibliography} onChange={this.onChange} rows={3} cols={40} /><br />
                <br />
                <button onClick={this.onSubmit}>Cadastrar</button>
            </div>
        );
    }
}
