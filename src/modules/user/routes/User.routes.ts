import { Router } from 'express'
import { celebrate, Joi, Segments, errors } from 'celebrate'
import UserController from '../controller/UserController'
import isAuthenticated from '../../../shared/http/middleware/isAuthenticated'
import multer from 'multer'
import uploadConfig from '@config/upload'
import UpdateUserAvatarController from '../controller/UpdateUserAvatarController'

const userRoutes = Router()
const userController = new UserController()
const usersAvatarController = new UpdateUserAvatarController()
const upload = multer(uploadConfig)

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

userRoutes.patch('/avatar',
  isAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update
)

userRoutes.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }), userController.delete)

export default userRoutes
