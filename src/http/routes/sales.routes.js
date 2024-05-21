import express from 'express'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { Role } from '../../core/domain/role.js'
import { createSale, updateSale } from '../controllers/sales.controller.js'

const router = express.Router()

router.post('/create-sale',
    createSale
)

router.put('/update-sale',
    roleValidator([Role.ADMIN]),
    updateSale
)

export default router