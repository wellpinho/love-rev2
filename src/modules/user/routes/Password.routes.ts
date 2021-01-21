import { Router } from 'express'
import { celebrate, Joi, Segments, errors } from 'celebrate'
import ForgotPasswordControler from '../controller/ForgotPasswodController'

const passwordRoutes = Router()
const forgotPasswordController = new ForgotPasswordControler()

passwordRoutes.post('/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required()
    }
  }), forgotPasswordController.create)

export default passwordRoutes
