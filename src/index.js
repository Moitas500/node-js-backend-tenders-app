import express, {json, urlencoded} from 'express'
import cors from 'cors'
import {tokenMiddleware} from './http/middlewares/token.middleware.js'
import {errorHandler} from './http/middlewares/error-handler.middleware.js'
import users from './http/routes/users.routes.js'
import products from './http/routes/products.routes.js'
import roles from './http/routes/roles.routes.js'
import sales from './http/routes/sales.routes.js'

const app = express()

app.use(json())
app.use(urlencoded({extended: false}))
app.use(cors())
app.use(tokenMiddleware)

app.use('/users', users)
app.use('/products', products)
app.use('/roles', roles)
app.use('/sales', sales)

app.use(errorHandler)

app.listen(3001)
console.log('Server on port 3001')