import {SHOW_ALERT, HIDE_ALERT} from '../types/index'

// Each reducer has it's own state
const initialState = {
    alert: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT: 
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                
            }
        default:
            return state
    }
}