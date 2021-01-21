import { Request, Response } from "express";
import SendForgotPasswordEmailService from "../services/SendForgotPasswordEmailService";

class ForgotPasswordControler {

  public async create(req: Request, res: Response): Promise<Response> {
    const sendForgotPasswordEmail = new SendForgotPasswordEmailService()

    const { email } = req.body

    await sendForgotPasswordEmail.execute({ email })

    return res.status(204).json([])
  }

}

export default ForgotPasswordControler
