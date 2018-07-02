import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Users } from "../models/Users";
import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { UserController } from "./users.controller";

export class LoginController {
  constructor(
    @repository(UsersRepository.name) private UsersRepo: UsersRepository
  ) { }


  @get("/Users/{Username}/{Password}")
  async Login(
    @param.path.string("Username") Username: string,
    @param.path.string("Password") Password: string,
  ): Promise<string> {

    let allUsers: Array<Users> = await this.UsersRepo.find();

    for (let user of allUsers) {
      if (user.getUsername() == Username) {
        if (user.getPassword() == Password) {
          return "Login Sucessful!";
        }
        else {
          return "Password incorrect";
        }
      }
      else {
        return user.getUsername() + " " + Username/*"Username not found"*/;
      }
    }


    throw new HttpErrors.NotFound("Sorry, User not found")
  }
}
