import React from 'react'
import {Link} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {deleteProductAction} from '../actions/deleteProductAction'

const Product = ({product}) => {
    const dispatch = useDispatch();

    const confirmDeleteProduct = id => {


        dispatch(deleteProductAction(id))
    }
    
    return (
        <tr>
            <td>{product.name}</td>
            <td><span className="font-weight-bold">$ {product.price}</span></td>
            <td className="actions">
                <Link to={`/products/edit/${product.id}`} 
                    className="btn btn-primary mr-2"
                > Edit </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmDeleteProduct(product.id)}
                > Delete </button>
            </td>
        </tr>
    )
}

export default Product
