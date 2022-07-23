import { ICreateUser } from "../ICreateUser";
import { User } from '../../entities/User';
import { prismaClient } from "../../database/prismaSetup";

export class UsersRepository implements ICreateUser {

  async findByEmail(email: string): Promise<User> {
    const user = prismaClient.user.findFirst({
      where: {
        email
      }
    })

    return user;
  }

  async save(user: User): Promise<void> {
    await prismaClient.user.create({
      data: user
    })
  }
}