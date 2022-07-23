import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";


export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) { }

  async execute(data: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('This User already exists!')
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}