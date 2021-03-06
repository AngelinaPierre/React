import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        // create state
        this.state = {
            description: '',
            list: [],
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(
                resp => this.setState({
                    ...this.state,
                    description,
                    list: resp.data,
                })
            )
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        // console.log(this.state.description)
        const description = this.state.description
        axios.post(URL,{description})
            .then(
                resp => this.refresh()
            )
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(
                resp => this.refresh(this.state.description)
            )
    }
    handleSearch(){
        this.refresh(this.state.description)
    }
    handleDone(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:true,
        })
            .then(
                resp => this.refresh(this.state.description)
            )
    }
    handlePending(todo){
        axios.put(`${URL}/${todo._id}`,{
            ...todo,
            done:false,
        })
            .then(
                resp => this.refresh(this.state.description)
            )
    }
    handleClear(){
        this.refresh()
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                    handleSearch={this.handleSearch}
                    handleClear = {this.handleClear}
                />
                <TodoList 
                    list={this.state.list} 
                    handleRemove = {this.handleRemove}
                    handleMarkAsDone = {this.handleDone}
                    handleMarkAsPending = {this.handlePending}
                />
            </div>
        )
    }
}