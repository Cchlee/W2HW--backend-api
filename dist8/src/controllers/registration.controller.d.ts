import { Users } from "../models/Users";
import { UsersRepository } from "../repositories/users.repository";
export declare class RegistrationController {
    private UsersRepo;
    constructor(UsersRepo: UsersRepository);
    createUser(user: Users): Promise<Users>;
}
