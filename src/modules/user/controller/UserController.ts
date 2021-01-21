import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";
import UpdateUserService from "../services/UpdateUserService";

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUser = new ListUserService()

    console.log('User ID: ', req.user.id)
    const users = await listUser.execute()

    return res.json(users)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showUser = new ShowUserService()

    const user = await showUser.execute({ id })

    return res.json(user)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const createUser = new CreateUserService()

    const { name, email, password } = req.body

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    return res.json(user)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const updateUser = new UpdateUserService()

    const { id } = req.params
    const { name, email, password } = req.body

    const user = await updateUser.execute({
      id,
      name,
      email,
      password
    })

    return res.json(user)
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const deleteUser = new DeleteUserService()

    const { id } = req.params

    await deleteUser.execute({ id })

    return res.json([])
  }
}

export default UserController
