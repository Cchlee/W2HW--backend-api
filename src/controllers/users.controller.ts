import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Users } from "../models/Users";
import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";

// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';

export class UserController {


  constructor(
    @repository(UsersRepository.name) private UsersRepo: UsersRepository
  ) { }

  @get("/Users")
  async getAllUsers(
  ): Promise<Array<any>> {
    return await this.UsersRepo.find();
  }

  @get("/Users/{UsersId}")
  async getSpecificUser(
    @param.path.number("UsersId") UsersId: number,
  ): Promise<Users> {
    let allUsers: Array<Users> = await this.getAllUsers();

    for (let user of allUsers) {
      if (user.getId() == UsersId) {
        return user;
      }
    }


    throw new HttpErrors.NotFound("Sorry, User not found")
  }
}


