import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
