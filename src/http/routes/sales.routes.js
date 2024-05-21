import express from 'express'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { Role } from '../../core/domain/role.js'
import { 
    createSale, 
    deleteSale, 
    getSales, 
    getSalesInADay, 
    getSalesInAMonth, 
    updateSale 
} from '../controllers/sales.controller.js'

const router = express.Router()

router.get('/',
    getSales
)

router.get('/day/:date',
    roleValidator([Role.ADMIN]),
    getSalesInADay
)

//:date like 2024-01
router.get('/month/:date',
    roleValidator([Role.ADMIN]),
    getSalesInAMonth
)

router.post('/create-sale',
    createSale
)

router.put('/update-sale',
    roleValidator([Role.ADMIN]),
    updateSale
)

router.delete('/delete-sale/:id',
    roleValidator([Role.ADMIN]),
    deleteSale
)

export default router