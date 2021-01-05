import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types/index'

import axiosClient from '../config/axios'

export function createNewProductAction(product){
    return (dispatch) => {
        dispatch(addProduct())

        try {
            axiosClient.post('/products', product)
            dispatch(addProductSuccess(product))
        } catch (error) {
            console.log(error)
            dispatch(addProductError(true))
        }

    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})