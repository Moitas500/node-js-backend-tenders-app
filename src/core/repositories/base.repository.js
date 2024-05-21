import dbClient from "../../config/db-client.js";


export class BaseRepository {

    static trimQuery(query) {
		return query.replace(/\s+/g, ' ')
	}

    static async dbSelectAll(tableName, callback) {
		dbClient.all(`SELECT * FROM ${tableName}`, callback)
	}

    static async dbInsert(tableName, values) {
        const columnNames = Object.keys(values)

        return dbClient.run(BaseRepository.trimQuery(`
            INSERT INTO ${tableName} (${columnNames.join(',')})
            VALUES (${columnNames.map((_) => '?').join(',')})
        `),
        Object.values(values),
        (error) => console.error(error))
    }
}
