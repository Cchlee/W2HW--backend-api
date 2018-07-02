import { UsersRepository } from "../repositories/users.repository";
export declare class LoginController {
    private UsersRepo;
    constructor(UsersRepo: UsersRepository);
    Login(Username: string, Password: string): Promise<string>;
}
