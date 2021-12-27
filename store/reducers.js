import { combineReducers } from "redux";
import {
    AUTHENTICATE,
    LOGOUT
} from "./actions";

const initialAuthState = {
    email: '',
    password: '',
    isUser: true,
    logout: true
}

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                email: action.payload.email || 'No User',
                password: action.payload.password || 'No User',
                isUser: action.payload.isUser
            }
        case LOGOUT:
            return initialAuthState
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer
