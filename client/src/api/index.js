import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const insertProduct= payload => api.post(`/product`, payload)
export const getAllProducts = () => api.get(`/products`)

const apis = {
    insertProduct,
    getAllProducts,
}

export default apis