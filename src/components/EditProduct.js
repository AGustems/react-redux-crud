import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {editProductAction} from '../actions/editProductAction'


const EditProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: ''
    })
    
    const product = useSelector(state => state.products.productEdit)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect( () => {
        setNewProduct(product)
    }, [product])

    const handleChange = ({target}) => {
        setNewProduct( state => ({
            ...state,
            [target.name]: target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(editProductAction(newProduct))
        history.push('/')
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name of the product</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Product Name"
                                    name="name"
                                    value={newProduct.name}
                                    onChange={handleChange}
                                    />
                            </div>

                            <div className="form-group">
                                <label>Price of the product</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Product Price"
                                    name="price"
                                    value={newProduct.price}
                                    onChange={handleChange}
                                    />
                            </div>
                            <input 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                value="Save Changes"/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
