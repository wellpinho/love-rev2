import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

interface IRequest {
  id: string
  image: string
  name: string
  description: string
  price: number
  quantity: number
}

class UpdateProdutcService {
  public async execute({ id, image, name, description, price, quantity }: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository)

    const product = await productRepository.findOne(id)

    if (!product) {
      throw new AppError('Product not found.')
    }

    const productExists = await productRepository.findByName(name)

    if (productExists) {
      throw new AppError('There is already product with this name.')
    }

    product.image = image
    product.name = name
    product.description = description
    product.price = price
    product.quantity = quantity

    await productRepository.save(product)


    return product
  }
}

export default UpdateProdutcService
