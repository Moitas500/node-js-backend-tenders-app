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