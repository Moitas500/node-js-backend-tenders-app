import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'users';

export class UserRepository {

    static async listUsers() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
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