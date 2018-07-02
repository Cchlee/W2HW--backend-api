import { Users } from "../models/Users";
import { UsersRepository } from "../repositories/users.repository";
export declare class UserController {
    private UsersRepo;
    constructor(UsersRepo: UsersRepository);
    getAllUsers(): Promise<Array<any>>;
    getSpecificUser(UsersId: number): Promise<Users>;
}
