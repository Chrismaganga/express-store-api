import { Request, Response } from 'express';
import orderModel from '../models/orderModel';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await orderModel.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error creating order' });
    }
};

export const getAllOrders = async (_req: Request, res: Response) => {
    try {
        const orders = await orderModel.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await orderModel.findById(parseInt(req.params.id));
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching order' });
    }
};
