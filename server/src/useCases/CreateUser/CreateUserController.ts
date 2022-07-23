import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  async handle(request: Request, response: Response) {
    const { name, email, profile_pic, bio } = request.body;

    try {
      await this.createUserUseCase.execute({
        name, email, profile_pic, bio
      })
      return response.status(201).send();
    } catch (error) {
      throw new Error(error)
    }
  }
}