import pool from '../config/database';

export interface Product {
    id?: number;
    name: string;
    price: number;
    category?: string;
}

class ProductModel {
    async create(product: Product): Promise<Product> {
        const result = await pool.query(
            'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *',
            [product.name, product.price, product.category]
        );
        return result.rows[0];
    }

    async findAll(): Promise<Product[]> {
        const result = await pool.query('SELECT * FROM products');
        return result.rows;
    }

    async findById(id: number): Promise<Product | null> {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        return result.rows[0] || null;
    }
}

export default new ProductModel();

