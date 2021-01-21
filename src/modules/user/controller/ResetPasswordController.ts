import { Request, Response } from "express";
import ResetPasswordService from "../services/ResetPasswordService";

class ResetPasswordControler {

  public async create(req: Request, res: Response): Promise<Response> {
    const resetForgotPasswordEmail = new ResetPasswordService()

    const { password, token } = req.body

    await resetForgotPasswordEmail.execute({ password, token })

    return res.status(204).json([])
  }

}

export default ResetPasswordControler
