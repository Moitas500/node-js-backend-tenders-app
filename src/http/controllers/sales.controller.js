import { SalesRepository } from "../../core/repositories/sales.repository.js"

export const getSales = async (req, res) => {
    await SalesRepository.listSales((err, rows) => {
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

export const getSalesInADay = async (req, res) => {
    await SalesRepository.listSalesInADay((err, rows) => {
            if (err) { 
                console.log(err)
                res.status(500).json({
                    message: err
                })
            } else {
                res.status(200).json(
                    calculateSells(rows)
                )
            }
        },
        req.params.date
    )
}

export const getSalesInAMonth = async (req, res) => {
    await SalesRepository.listSalesInAMonth((err, rows) => {
            if (err) { 
                console.log(err)
                res.status(500).json({
                    message: err
                })
            } else {
                res.status(200).json(
                    calculateSells(rows)
                )
            }
        },
        req.params.date
    )
}

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

function calculateSells(sales) {
    return sales.reduce((acc, item) => acc + (item.price * item.qty), 0)
}
