const HEADER_NAME = 'auth'

export const roleValidator = (allowedRoles) => {
	return (req, res, next) => {
		
		const role =  req.headers[HEADER_NAME]

		if (!role) return res.status(401).send('Se requiere encabezado de autorización')

		if (allowedRoles.includes(role)) {
			return next()
		}

		return res.status(403).json({
			error: 'No tiene autorizacion para acceder a esta ruta',
		})
	}
}
