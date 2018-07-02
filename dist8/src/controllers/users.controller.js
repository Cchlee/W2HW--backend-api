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
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let UserController = class UserController {
    constructor(UsersRepo) {
        this.UsersRepo = UsersRepo;
    }
    async getAllUsers() {
        return await this.UsersRepo.find();
    }
    async getSpecificUser(UsersId) {
        let allUsers = await this.getAllUsers();
        for (let user of allUsers) {
            if (user.getId() == UsersId) {
                return user;
            }
        }
        throw new rest_1.HttpErrors.NotFound("Sorry, User not found");
    }
};
__decorate([
    rest_1.get("/Users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    rest_1.get("/Users/{UsersId}"),
    __param(0, rest_1.param.path.number("UsersId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSpecificUser", null);
UserController = __decorate([
    __param(0, repository_1.repository(users_repository_1.UsersRepository.name)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map