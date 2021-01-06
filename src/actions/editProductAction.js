import {
    GET_EDIT_PRODUCT,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
} from '../types/index'

import axiosClient from '../config/axios'

// Action to select a product and take it to the state
export function getEditProductAction(product) {
    return (dispatch) => {
        dispatch(getEditProduct(product))
    }
}

// Functions to dispatch
const getEditProduct = product => ({
    type: GET_EDIT_PRODUCT,
    payload: product
})

// Action to select and edit a product from the database
export function editProductAction(product){
    return async (dispatch) => {
        dispatch(editProduct(true))

        try {
            const dbResutl = await axiosClient.put(`/products/${product.id}`, product)
            dispatch(editProductSuccess(product))
        } catch (error){

        }
    }
}

// Functions to dispatch
const editProduct = product => ({
    type: EDIT_PRODUCT,
    payload: product
})

const editProductSuccess = product => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product,
    loading: false,
    error: false
})


const editProductError = state => ({
    type: EDIT_PRODUCT_ERROR,
    payload: state
})