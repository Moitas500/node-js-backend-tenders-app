import { HEADER_NAME } from "../../core/consts/const.js"

export const tokenMiddleware = async function(req, res, next) {

	if (!req.headers[HEADER_NAME]) return res.status(401).send('Se requiere encabezado de autorización')

	next()
}
