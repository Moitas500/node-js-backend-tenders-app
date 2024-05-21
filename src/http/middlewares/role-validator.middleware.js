import { HEADER_NAME } from "../../core/consts/const.js"

export const roleValidator = (allowedRoles) => {
	return (req, res, next) => {
		
		if (allowedRoles.includes(req.headers[HEADER_NAME])) {
			return next()
		}

		return res.status(403).json({
			error: 'No tiene autorizacion para acceder a esta ruta',
		})
	}
}
