import { Products } from "../models/Products";
import { ProductsRepository } from "../repositories/products.repository";
export declare class ProductsController {
    private ProductsRepo;
    constructor(ProductsRepo: ProductsRepository);
    createProduct(product: Products): Promise<Products>;
    getAllProducts(): Promise<Array<any>>;
    getProductsInRange(lowerR: number, upperR: number): Promise<Array<Products>>;
    getProduct(productID: number): Promise<String>;
}
