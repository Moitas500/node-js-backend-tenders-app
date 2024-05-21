import { SalesRepository } from "../../core/repositories/sales.repository.js"

export const createSale = async (req, res) => {

    if (!isValidDate(req.body.sale_at)) {
        return res.status(400).json({ error: "La fecha de venta no es válida." });
    }

    await SalesRepository.createSale({
        id: req.body.id,
        qty: req.body.qty,
        sale_at: req.body.sale_at,
        users_id: req.body.users_id,
        products_id: req.body.products_id
    })
    .then(() => {
        res.status(201).json({
            message: 'Se creo la venta'
        })
    })
    .catch((error) => {
        res.status(500).json({
            message: error
        })
    })
}

export const deleteSale = async (req, res) => {
    await SalesRepository.deleteSale(
        req.params.id
    )
    .then( () => {
        res.status(201).json({
            message: 'Sale deleted'
        })
    })
    .catch( (error) => {
        res.status(500).json({
            message: error
        })
    })
}

export const updateSale = async (req, res) => {
    await SalesRepository.updateSale(
        req.body.qty,
        req.body.id
    )
    .then( () => {
        res.status(201).json({
            message: 'Sale updated'
        })
    })
    .catch( (error) => {
        res.status(500).json({
            message: error
        })
    })
}

function isValidDate(dateString) {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject.getTime()) && dateString === dateObject.toISOString().split('T')[0];
}
