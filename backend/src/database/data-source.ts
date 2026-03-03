import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Task } from '../tasks/task.entity';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: process.env.DB_PATH || './data/tasks.db',
  entities: [Task],
  synchronize: true, // Auto-creates tables — fine for dev/recruitment
});
