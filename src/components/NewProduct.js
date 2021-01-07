import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Actions from redux
import {createNewProductAction} from '../actions/addProductAction'
import {showAlertAction, hideAlertAction} from '../actions/alertsActions'

const NewProduct = ({history}) => {
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

    // Access to the store state
    const loading = useSelector( state => state.products.loading)
    const error = useSelector(state => state.products.error)
    const alert = useSelector (state => state.alerts.alert)

    // Call the action from productAction
    const addProduct = product => dispatch(createNewProductAction(product))

    const handleSubmit = e => {
        e.preventDefault()
        
        // Validate the form
        if(state.name.trim() === "" || +state.price <= 0){
            const alert = {
                msg: 'Both fields are mandatory',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            
            dispatch(showAlertAction(alert))

            return;
        }

        // If there are no errors
        dispatch(hideAlertAction())

        // Add the product
        addProduct(state);

        // Home redirection
        history.push('/')
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>

                        {alert ? <p className={alert.classes}>{alert.msg}</p> : null}

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
                        {loading ? <p>Loading...</p> : null}
                        {error ? <p className="alert alert-danger text-center p2 mt-3">An error has occurred</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
