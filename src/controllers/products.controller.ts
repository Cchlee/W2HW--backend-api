import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Products } from "../models/Products";
import { repository } from "@loopback/repository";
import { ProductsRepository } from "../repositories/products.repository";


export class ProductsController {
  constructor(
    @repository(ProductsRepository.name) private ProductsRepo: ProductsRepository
  ) { }

  @post("/Products")
  async createProduct(
    @requestBody() product: Products
  ): Promise<Products> {

    let createdProduct = await this.ProductsRepo.create(product);
    return createdProduct;

  }

  @get("/Products")
  async getAllProducts(
  ): Promise<Array<any>> {
    return await this.ProductsRepo.find();
  }

  @get("/Products/{LowerR}/{UpperR}")
  async getProductsInRange(
    @param.path.number("LowerR") lowerR: number,
    @param.path.number("UpperR") upperR: number,
  ): Promise<Array<Products>> {
    let allProducts: Array<Products> = await this.getAllProducts();
    let inRange: Array<Products>;
    inRange = [];
    for (let product of allProducts) {
      if (product.getPrice() >= lowerR && product.getPrice() <= upperR) {
        inRange.push(product);
      }
    }
    return inRange;
  }

  @get("/Products/{productID}")
  async getProduct(
    @param.path.number("productID") productID: number,
  ): Promise<String> {
    let allProducts: Array<Products> = await this.getAllProducts();
    for (let product of allProducts) {
      if (product.getId() == productID) {
        return product.getName();
      }
    }
    throw new HttpErrors.NotFound("Sorry, User not found")
  }

}
