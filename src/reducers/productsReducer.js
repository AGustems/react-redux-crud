import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
} from '../types/index'

// Each reducer has it's own state
const initialState = {
    products: [],
    error: false,
    loading: false,
    productErrase: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case ADD_PRODUCT:
        case GET_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case GET_PRODUCTS_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                productErrase: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productErrase),
                error: false,
                productErrase: null
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                productErrase: null
            }
        default:
            return state
    }
}