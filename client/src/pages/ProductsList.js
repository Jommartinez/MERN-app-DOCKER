import React, {useEffect, useState} from 'react'
import api from '../api'

const ProductsList = () => {
    const [products, setProducts] = useState([])
    
        useEffect(() => {
         api.getAllProducts().then(products => {
                   
                    setProducts(products.data.data)
                })
            
        }, [])
 
        return (
            <ul>
                {products &&
                    products.map((product) => (
                        <li key={product._id}>
                            Name: {product.name} | Precio: {product.price}€
                        </li>
                ))}
            </ul>
        )
    
}

export default ProductsList