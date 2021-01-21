import { Request, Response } from "express";
import CreateProdutcService from "../services/CreateProductService";
import DeleteProdutcService from "../services/DeleteProductService";
import ListProdutcService from "../services/ListProductService";
import ShowProdutcService from "../services/ShowProductService";
import UpdateProdutcService from "../services/UpdateProductService";

class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listProduct = new ListProdutcService()

    const products = await listProduct.execute()

    return res.json(products)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showProduct = new ShowProdutcService()

    const product = await showProduct.execute({ id })

    return res.json(product)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const createProduct = new CreateProdutcService()

    const { image, name, description, price, quantity } = req.body

    const product = await createProduct.execute({
      image,
      name,
      description,
      price,
      quantity
    })

    return res.json(product)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const updateProduct = new UpdateProdutcService()

    const { id } = req.params
    const { image, name, description, price, quantity } = req.body

    const product = await updateProduct.execute({
      id,
      image,
      name,
      description,
      price,
      quantity
    })

    return res.json(product)
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const deleteProduct = new DeleteProdutcService()

    const { id } = req.params

    await deleteProduct.execute({ id })

    return res.json([])
  }
}

export default ProductController
