import { Router } from 'express'
// import productRouter from '@modules/products/routes/Products.routes'
// import usersRouter from '@modules/users/routes/Users.routes'
// import sessionRouter from '@modules/users/routes/SessionsRoutes'
// import passwordRouter from '@modules/users/routes/Password.routes'
// import profileRouter from '@modules/users/routes/Profile.routes'
// import customersRoutes from '@modules/customers/routes/Customers.routes'
// import orderRoutes from '@modules/orders/routes/Order.routes'
const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello Dev!'
  })
})

// routes.use('/products', productRouter)
// routes.use('/users', usersRouter)
// routes.use('/sessions', sessionRouter)
// routes.use('/password', passwordRouter)
// routes.use('/profile', profileRouter)
// routes.use('/customers', customersRoutes)
// routes.use('/orders', orderRoutes)

export default routes
