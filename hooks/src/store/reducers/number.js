export function numberReducer(state, action) {
    switch (action.type) { // toda action possui um tipo
        case 'num_add2': // tipo da action(objeto)
            return ({ ...state, number: state.number + 2 })
        case 'num_mult7':
            return ({...state,number: state.number * 7})
        case 'num_div25':
            return ({...state,number: state.number / 25})
        case 'numInt':
            return ({...state,number: parseInt(state.number)})
        case 'num_addN':
            return ({...state,number: state.number + action.payload})
        default:
            return state // default é o retorno do estado atual. alterado para resetar(initialState)
    }
}