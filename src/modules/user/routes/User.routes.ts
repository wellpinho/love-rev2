import { Router } from 'express'
import { celebrate, Joi, Segments, errors } from 'celebrate'
import UserController from '../controller/UserController'
import isAuthenticated from '../../../shared/http/middleware/isAuthenticated'

const userRoutes = Router()
const userController = new UserController()

userRoutes.get('/', isAuthenticated, userController.index)

userRoutes.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }), userController.show)

userRoutes.post('/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }
  }), userController.create)

userRoutes.put('/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }), userController.update)

userRoutes.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }), userController.delete)

export default userRoutes
