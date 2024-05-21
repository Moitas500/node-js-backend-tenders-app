import dbClient from "../../config/db-client.js";
import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'sales';

export class SalesRepository {
    
    static listSales(callback) {
        return BaseRepository.dbSelectAll(TABLE_NAME, callback)
    }

    static listSalesInADay(callback, sale_at) {
        return dbClient.all(`
            SELECT S.id, S.qty, P.price 
            FROM sales S, products P
            WHERE P.id = S.products_id
            AND S.sale_at = ?
        `, [sale_at], callback)
    }

    static listSalesInAMonth(callback, month) {
        return dbClient.all(`
            SELECT S.id, S.qty, P.price
            FROM sales S
            JOIN products P ON P.id = S.products_id
            WHERE strftime('%Y-%m', S.sale_at) = ?
        `, [month], callback)
    }

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