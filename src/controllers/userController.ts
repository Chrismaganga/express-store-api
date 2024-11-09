import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';

const userModel = new UserModel();

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Other user controllers...
