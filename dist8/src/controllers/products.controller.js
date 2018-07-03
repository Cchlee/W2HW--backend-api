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
const Products_1 = require("../models/Products");
const repository_1 = require("@loopback/repository");
const products_repository_1 = require("../repositories/products.repository");
let ProductsController = class ProductsController {
    constructor(ProductsRepo) {
        this.ProductsRepo = ProductsRepo;
    }
    async createProduct(product) {
        let createdProduct = await this.ProductsRepo.create(product);
        return createdProduct;
    }
    async getAllProducts() {
        return await this.ProductsRepo.find();
    }
    async getProductsInRange(lowerR, upperR) {
        let allProducts = await this.getAllProducts();
        let inRange;
        inRange = [];
        for (let product of allProducts) {
            if (product.getPrice() >= lowerR && product.getPrice() <= upperR) {
                inRange.push(product);
            }
        }
        return inRange;
    }
    async getProduct(productID) {
        let allProducts = await this.getAllProducts();
        for (let product of allProducts) {
            if (product.getId() == productID) {
                return product.getName();
            }
        }
        throw new rest_1.HttpErrors.NotFound("Sorry, User not found");
    }
};
__decorate([
    rest_1.post("/Products"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Products_1.Products]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduct", null);
__decorate([
    rest_1.get("/Products"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAllProducts", null);
__decorate([
    rest_1.get("/Products/{LowerR}/{UpperR}"),
    __param(0, rest_1.param.path.number("LowerR")),
    __param(1, rest_1.param.path.number("UpperR")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductsInRange", null);
__decorate([
    rest_1.get("/Products/{productID}"),
    __param(0, rest_1.param.path.number("productID")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
ProductsController = __decorate([
    __param(0, repository_1.repository(products_repository_1.ProductsRepository.name)),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map