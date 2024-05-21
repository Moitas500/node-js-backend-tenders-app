import sqlite from "sqlite3"

export default new sqlite.Database("./dbTenders.db", sqlite.OPEN_READWRITE,
    (error) => {
        if (error) console.error(error)
    }
)