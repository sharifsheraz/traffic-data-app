import express from 'express';
import trafficRouter from './routes/traffic.route';

const app = express();

app.use(express.json());

app.use('/traffic', trafficRouter);

export default app;
