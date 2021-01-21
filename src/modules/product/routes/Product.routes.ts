import { Router } from 'express'
import ProductController from '../controller/ProductConroller'
import { celebrate, Joi, Segments, errors } from 'celebrate'

const productRoutes = Router()
const productController = new ProductController()

productRoutes.get('/', productController.index)

productRoutes.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required()
    }
  }), productController.show)

productRoutes.post('/',
  celebrate({
    [Segments.BODY]: {
      image: Joi.string(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }), productController.create)

productRoutes.put('/:id',
  celebrate({
    [Segments.BODY]: {
      image: Joi.string(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    },
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }), productController.update)

productRoutes.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required()
    }
  }), productController.delete)

export default productRoutes
