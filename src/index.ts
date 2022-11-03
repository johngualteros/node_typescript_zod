import express from 'express';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());

app.use('/api/v1', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000 🚀🚀');
});