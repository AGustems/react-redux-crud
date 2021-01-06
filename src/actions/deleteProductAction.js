import {
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
} from '../types/index'

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// Action to select and delete a product to the database
export function deleteProductAction (id) {
    return async (dispatch) => {
        dispatch(deleteProduct(id))

        try{
            const dbResult = await axiosClient.delete(`products/${id}`)
            dispatch (deleteProductSuccess())
        } catch (error) {
            dispatch (deleteProductError(true))
        }

    }
}

// Functions to dispatch
const deleteProduct = id => ({
    type: DELETE_PRODUCT,
    payload: id
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS
})

const deleteProductError = state => ({
    type: DELETE_PRODUCT_ERROR,
    payload: state
})