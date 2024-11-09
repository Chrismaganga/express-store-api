import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route definitions
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Basic route for health check
app.get('/', (_req: Request, res: Response) => {
    res.send('API is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
