import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Users } from "../models/Users";
import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";

export class RegistrationController {

  constructor(
    @repository(UsersRepository.name) private UsersRepo: UsersRepository
  ) { }

  @post("/Users")
  async createUser(
    @requestBody() user: Users
  ): Promise<Users> {

    let createdUser = await this.UsersRepo.create(user);
    return createdUser;

  }
}
