import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'users';

export class UserRepository {

    static deleteUser( id ) {
        return BaseRepository.dbDelete(TABLE_NAME, {
            'id = ?': id
        })
    }

    static listUsers(callback) {
        return BaseRepository.dbSelectAll(TABLE_NAME, callback)
    }

    static updateUser(roles_id, id) {
        return BaseRepository.dbUpdateTable(TABLE_NAME, 
            {
                'roles_id = ?': roles_id
            },
            {
                'id = ?': id
            }
        )
    }

    static async createUser( user ) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            id: user.id,
            document: user.document,
            last_name: user.last_name,
            name: user.name,
            roles_id: user.roles_id
        })
    }
}