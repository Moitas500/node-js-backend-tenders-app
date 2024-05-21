import { BaseRepository } from "./base.repository.js";

const TABLE_NAME = 'roles';

export class RolesRepository {
    
    static async listRoles() {
        return BaseRepository.dbSelectAll(TABLE_NAME)
    }
    
    static async createRole( role ) {
        return BaseRepository.dbInsert(TABLE_NAME, {
            id: role.id,
            name: role.name
        })
    }
}
