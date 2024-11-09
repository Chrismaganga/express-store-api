import pool from '../config/database';
import bcrypt from 'bcrypt';

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    password: string;
}

export class UserModel {
    async create(user: User): Promise<User> {
        const hash = await bcrypt.hash(user.password, 10);
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3) RETURNING *',
            [user.firstName, user.lastName, hash]
        );
        return result.rows[0];
    }

    async findById(id: number): Promise<User | null> {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0] || null;
    }

    // Other user model functions...
}
