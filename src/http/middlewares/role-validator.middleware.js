export const roleValidator = (allowedRoles) => {
	return (req, res, next) => {
		if (allowedRoles.includes(req.userLogged.role)) {
			return next()
		}

		return res.status(403).json({
			error: 'No tiene autorizacion para acceder a esta ruta',
		})
	}
}
