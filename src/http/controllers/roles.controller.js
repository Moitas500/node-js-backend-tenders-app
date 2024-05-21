import { RolesRepository } from "../../core/repositories/roles.repository.js"

export const createRole = async (req, res) => {
    await RolesRepository.createRole({
        id: req.body.id,
        name: req.body.name
    })
        .then(() => {
            res.status(201).json({
                message: 'Se creo el rol'
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: error
            })
        })
}
