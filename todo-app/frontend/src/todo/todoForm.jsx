import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton";

export default props => {
    const keyhandler = (event) => {
        if(event.key === 'Enter'){
            event.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(event.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
        <div role='form' className="todoForm">
            <Grid cols='12-9-10'>
                <input 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyhandler}
                />
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton 
                    style='primary' 
                    icon='plus' 
                    onClick={props.handleAdd}
                />
                <IconButton
                    style='infor'
                    icon='search'
                    onClick={props.handleSearch}
                />
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )
}