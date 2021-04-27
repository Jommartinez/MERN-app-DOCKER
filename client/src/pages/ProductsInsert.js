import React, { useState } from 'react'
import api from '../api'

const ProductsInsert = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
    })

     const handleChangeInputName = async event => {
        setProduct({
            ...product,
            name: event.target.value
        })
    }

    const handleChangeInputPrice = async event => {
        setProduct({
            ...product,
            price: event.target.value
        })
    }

    const handleIncludeProduct = async () => {
        const { name, price } = product
        const payload = { name, price }

        await api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
            setProduct({
                name: '',
                price: '',
            })
        })
    }

  

        return (
            <div>
                <p>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={product.name}
                        onChange={handleChangeInputName}
                    />
                </p>

                <p>
                    <label>price: </label>
                    <input
                        type="number"
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={product.price}
                        onChange={handleChangeInputPrice}
                    />
                </p>

                <button onClick={handleIncludeProduct}>Add Product</button>
            </div>
        )
    
}

export default ProductsInsert