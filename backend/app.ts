import express from 'express';
import trafficRouter from './routes/traffic.route';
import cors from 'cors';
import 'reflect-metadata';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
  console.log('Database initialized');
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/traffic', trafficRouter);

export default app;
