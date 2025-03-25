import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT ?? ''),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: ['migrations/*.ts'],
});
