import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types/index'

// Each reducer has it's own state
const initialState = {
    products: [],
    error: false,
    loading: false,
}

export default function(state = initialState, action) {
    switch(action.type){
        
        
        default:
            return state
    }
}