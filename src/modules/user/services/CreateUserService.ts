import AppError from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UseRepository";

interface IRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository)

    const emailExists = await userRepository.findByEmail(email)

    if (emailExists) {
      throw new AppError('There is already user with this email.')
    }

    const hashedPassword = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword
    })

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
