import express from 'express'
import { roleValidator } from '../middlewares/role-validator.middleware.js'
import { Role } from '../../core/domain/role.js'
import { createUser, getUsers } from '../controllers/users.controllers.js'

const router = express.Router()

router.get('/',
    roleValidator([Role.ADMIN]),
    getUsers
)

router.post('/create-user',
    roleValidator([Role.ADMIN]),
    createUser
)

export default router