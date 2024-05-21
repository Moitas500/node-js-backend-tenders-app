import express from 'express'
import { Role } from '../../core/domain/role.js'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { createRole } from '../controllers/roles.controller.js'

const router = express.Router()

router.post('/create-role',
    roleValidator([Role.ADMIN]),
    createRole
)

export default router