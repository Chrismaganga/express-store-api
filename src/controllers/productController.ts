import { Request, Response } from 'express';
import productModel from '../models/productModel';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
};

export const getAllProducts = async (_req: Request, res: Response) => {
    try {
        const products = await productModel.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await productModel.findById(parseInt(req.params.id));
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product' });
    }
};
