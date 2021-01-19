import { application, Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({
    status: '200 OK!',
    message: 'Hello World!'
  })
})

export default routes