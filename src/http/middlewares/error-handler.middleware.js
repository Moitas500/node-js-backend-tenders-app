export const errorHandler = async function(error, req, res, next) {
	console.error('Unexpected error, dying with honor...')
	console.error(error)
	res.status(500).send()
}
