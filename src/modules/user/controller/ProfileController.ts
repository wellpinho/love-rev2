import { Request, Response } from "express";
import UpdateProfileService from "../services/UpdateProfileService";
import { classToClass } from 'class-transformer'
import ShowProfileService from "../services/ShowProfileService";

export default class ProfileController {

  public async show(req: Request, res: Response): Promise<Response> {
    const showProfile = new ShowProfileService()
    const user_id = req.user.id
    const user = await showProfile.execute({ user_id })

    return res.json(classToClass(user))
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id
    const { name, email, password, old_password } = req.body

    const updateProfile = new UpdateProfileService()

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password
    })

    return res.json(classToClass(user))
  }
}
