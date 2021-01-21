import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import { ProductRepository } from "../typeorm/repositories/ProductRepository";

interface IRequest {
  image: string
  name: string
  description: string
  price: number
  quantity: number
}

class CreateProdutcService {
  public async execute({ image, name, description, price, quantity }: IRequest): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository)

    const productExists = await productRepository.findByName(name)

    if (productExists) {
      throw new AppError('There is already product with this name.')
    }

    const product = productRepository.create({
      image,
      name,
      description,
      price,
      quantity
    })

    await productRepository.save(product)

    return product
  }
}

export default CreateProdutcService
