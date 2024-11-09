import pool from '../config/database';

export interface Order {
    id?: number;
    user_id: number;
    product_id: number;
    quantity: number;
    status?: string;
}

class OrderModel {
    async create(order: Order): Promise<Order> {
        const result = await pool.query(
            'INSERT INTO orders (user_id, product_id, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *',
            [order.user_id, order.product_id, order.quantity, order.status || 'pending']
        );
        return result.rows[0];
    }

    async findAll(): Promise<Order[]> {
        const result = await pool.query('SELECT * FROM orders');
        return result.rows;
    }

    async findById(id: number): Promise<Order | null> {
        const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        return result.rows[0] || null;
    }
}

export default new OrderModel();
