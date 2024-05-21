import { ProductsRepository } from "../../core/repositories/products.repository.js"

export const createProduct = async (req, res) => {
    await ProductsRepository.createProduct({
        id: req.body.id,
        description: req.body.description,
        name: req.body.name,
        price: req.body.price
    })
    .then(() => {
        res.status(201).json({
            message: 'Se creo el producto'
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error
        })
    })
}

export const getProducts = async (req, res) => {
    await ProductsRepository.listProducts((err, rows) => {
        if (err) { 
            console.log(err)
            res.status(500).json({
                message: error
            })
        } else {
            res.status(200).json(rows)
        }
    })
}