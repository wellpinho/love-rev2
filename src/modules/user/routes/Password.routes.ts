import { Router } from 'express'
import { celebrate, Joi, Segments, errors } from 'celebrate'
import ForgotPasswordControler from '../controller/ForgotPasswodController'
import ResetPasswordControler from '../controller/ResetPasswordController'

const passwordRoutes = Router()
const forgotPasswordController = new ForgotPasswordControler()
const resetPasswordController = new ResetPasswordControler()

passwordRoutes.post('/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required()
    }
  }), forgotPasswordController.create)

passwordRoutes.post('/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password'))
    }
  }), resetPasswordController.create)

export default passwordRoutes
