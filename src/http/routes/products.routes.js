import express from 'express'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { Role } from '../../core/domain/role.js'
import { createProduct } from '../controllers/products.controller.js'

const router = express.Router()

router.post('/create-product',
    roleValidator([Role.ADMIN]),
    createProduct
)

export default router