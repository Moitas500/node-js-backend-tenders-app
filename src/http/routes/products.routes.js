import express from 'express'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { Role } from '../../core/domain/role.js'
import { 
    createProduct, 
    getProducts 
} from '../controllers/products.controller.js'

const router = express.Router()

router.post('/create-product',
    roleValidator([Role.ADMIN]),
    createProduct
)

router.get('/',
    getProducts
)

export default router