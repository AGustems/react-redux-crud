import React, {useEffect} from 'react'
import {userSelector, useDispatch} from 'react-redux'

import {getProductsAction} from '../actions/getProductAction'

const Products = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        // Check the api for products
        const loadProducts = () => dispatch (getProductsAction());
        loadProducts();
    }, [])

    return (
        <>
            <h2 className="text-center my-5"> Product Listing</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    )
}

export default Products
