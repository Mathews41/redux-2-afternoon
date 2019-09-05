import axios from 'axios'

const inititalState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return{
        type: REQUEST_USER_DATA,
        payload: data
    }
}

export default function reducer(state = inititalState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FUFILLED':
            return {email:action.payload.user.email, firstName:action.payload.user.firtName, lastName:action.payload.user.lastName}
            default:
                return state
    }
}