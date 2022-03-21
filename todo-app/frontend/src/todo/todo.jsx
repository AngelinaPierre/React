import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

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
    }
    handleOnChange(eChange){
        this.setState({
            ...this.state,
            description: eChange.target.value,
        })
    }
    handleAdd() {
        console.log(this.state.description)
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    handleAdd={this.handleAdd}
                    description={this.state.description}
                    handleChange={this.handleOnChange}
                />
                <TodoList />
            </div>
        )
    }
}