export function userReducer(state,action){
    switch(action.type){ // toda action possui um tipo
        case 'login':
            return ({...state,user: {name: action.payload} })
        default:
            return state // default é o retorno do estado atual. alterado para resetar(initialState)
    }
}