import express from 'express'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { Role } from '../../core/domain/role.js'
import { 
    createSale, 
    deleteSale, 
    getSales, 
    updateSale 
} from '../controllers/sales.controller.js'

const router = express.Router()

router.get('/',
    getSales
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