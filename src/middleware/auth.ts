import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token required' });

    try {
        jwt.verify(token, process.env.TOKEN_SECRET as string);
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid token' });
    }
};
