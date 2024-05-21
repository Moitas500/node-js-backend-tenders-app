import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'sales';

export class SalesRepository {
    
    static deleteSale(id) {
        return BaseRepository.dbDelete(TABLE_NAME, {
            'id = ?': id
        })
    }

    static async createSale(sale) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            id: sale.id,
            qty: sale.qty,
            sale_at: sale.sale_at,
            users_id: sale.users_id,
            products_id: sale.products_id
        })
    }

    static async updateSale(qty, id) {
        return BaseRepository.dbUpdateTable(TABLE_NAME, 
           {
                'qty = ?' : qty
           },
           {
                'id = ?' : id
           }
        )
    }
}