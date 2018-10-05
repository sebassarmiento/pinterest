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
        case Actions.LOGIN_PENDING:
        return state
        case Actions.LOGIN_SUCCESS:
        console.log('LOG SUCCESS')
        return {...state, login: true}
        default:
        return state
    }
}