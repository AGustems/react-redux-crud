import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Actions from redux
import {createNewProductAction} from '../actions/productActions.js'

const NewProduct = () => {
    // Local state to manage the form
    const [state, setState] = useState({
        name: '',
        price: 0
    })

    const handleInputChange = ({target}) => {
        setState(state => ({
            ...state,
            [target.name]: target.value
        }))
    }


    // Use dispatch to create a function
    const dispatch = useDispatch()

    // Call the action from productAction
    const addProduct = product => dispatch(createNewProductAction(product))

    const handleSubmit = e => {
        e.preventDefault()
        
        // Validate the form
        if(state.name.trim() === "" || +state.price <= 0){
            return;
        }
        

        // Add the product
        addProduct(state);
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name of the product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Product Name"
                                    name="name"
                                    value={state.name}
                                    onChange={handleInputChange}
                                    />
                            </div>

                            <div className="form-group">
                                <label>Price of the product</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Product Price"
                                    name="price"
                                    value={state.price}
                                    onChange={handleInputChange}
                                    />
                            </div>
                            <input 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                value="Add Product"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
