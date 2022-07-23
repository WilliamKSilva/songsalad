import { User } from "@prisma/client";

export interface ICreateUser {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}