import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../types/index'

import axiosClient from '../config/axios';

// Action to get the products form the database
export function getProductsAction () {
    return async (dispatch) => {
        dispatch (getProducts ())

        try {
            const dbResponse = await axiosClient.get('/products')
            dispatch(getProductsSuccess(dbResponse.data))
        } catch(error){
            dispatch(getProductsError(true))
        }
    }
}

// Functions to dispatch
const getProducts = () => ({
    type: GET_PRODUCTS,
    payload: true
})

const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
})

const getProductsError = state => ({
    type: GET_PRODUCTS_ERROR,   
    payload: state
})