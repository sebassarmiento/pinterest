import * as Actions from '../actions/actions'

const initialState = {
    login: false,
    user: {
        mail: null,
        password: null
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case Actions.LOGOUT_SUCCESS:
        return {...state, login: false}
        case Actions.LOGIN_SUCCESS:
        return {...state, login: true, user: { mail: action.payload.name, password: action.payload.password }}
        default:
        return state
    }
}