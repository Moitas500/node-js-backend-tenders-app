import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'sales';

export class SalesRepository {
    
    static async createSale(sale) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            id: sale.id,
            qty: sale.qty,
            sale_at: sale.sale_at,
            users_id: sale.users_id,
            products_id: sale.products_id
        })
    }

}