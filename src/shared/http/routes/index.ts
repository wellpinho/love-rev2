import { Router } from 'express'
import productRoutes from '@modules/product/routes/Product.routes'
import userRoutes from '@modules/user/routes/User.routes'
import sessionsRouter from '@modules/user/routes/Sessions.routes'
import passwordRoutes from '@modules/user/routes/Password.routes'
import profileRoutes from '@modules/user/routes/Profile.routes'
// import customersRoutes from '@modules/customers/routes/Customers.routes'
// import orderRoutes from '@modules/orders/routes/Order.routes'
const routes = Router()

routes.use('/products', productRoutes)
routes.use('/users', userRoutes)
routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRoutes)
routes.use('/profile', profileRoutes)
// routes.use('/customers', customersRoutes)
// routes.use('/orders', orderRoutes)

export default routes
