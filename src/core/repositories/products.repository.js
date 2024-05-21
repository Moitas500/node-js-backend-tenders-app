import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'products';

export class ProductsRepository {
    
    static async createProduct( product ) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            id: product.id,
            description: product.description,
            name: product.name,
            price: product.price
        })
    }

}