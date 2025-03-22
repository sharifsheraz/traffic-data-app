import express from 'express';
import trafficRouter from './routes/traffic.route';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/traffic', trafficRouter);

export default app;
