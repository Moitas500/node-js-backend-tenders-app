import { UserRepository } from "../../core/repositories/users.repository.js"

export const getUsers = async (req, res) => {
    try {
        const response = await UserRepository.listUsers()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

export const createUser = async (req, res) => {
    await UserRepository.createUser({
        id: req.body.id,
        document: req.body.document,
        last_name: req.body.last_name,
        name: req.body.name,
        roles_id: req.body.roles_id
    })
        .then(() => {
            res.status(201).json({
                message: 'Se creo el usuario'
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: error
            })
        })
}