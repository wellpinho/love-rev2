import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UseRepository";

interface IRequest {
  id: string
}

class ShowUserService {
  public async execute({ id }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne(id)

    if (!user) {
      throw new AppError('user not found.')
    }

    return user
  }
}

export default ShowUserService
