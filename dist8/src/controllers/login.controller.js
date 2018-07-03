"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const users_repository_1 = require("../repositories/users.repository");
let LoginController = class LoginController {
    constructor(UsersRepo) {
        this.UsersRepo = UsersRepo;
    }
    async Login(Username, Password) {
        let allUsers = await this.UsersRepo.find();
        for (let user of allUsers) {
            if (!user.Username || !user.Password) {
                throw new rest_1.HttpErrors.Unauthorized('invalid credentials');
            }
            if (user.getUsername() == Username) {
                if (user.getPassword() == Password) {
                    return "Login Sucessful!";
                }
                else {
                    return "Password incorrect";
                }
            }
            else {
                return "User not Found";
            }
        }
        throw new rest_1.HttpErrors.NotFound("Sorry, User not found");
    }
};
__decorate([
    rest_1.post("/Users/{Username}/{Password}"),
    __param(0, rest_1.param.path.string("Username")),
    __param(1, rest_1.param.path.string("Password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "Login", null);
LoginController = __decorate([
    __param(0, repository_1.repository(users_repository_1.UsersRepository.name)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map