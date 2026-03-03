import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: process.env.DB_PATH || './data/tasks.db',
      entities: [Task],
      synchronize: true, // Auto-creates tables - fine for dev/recruitment
    }),
    TasksModule,
  ],
})
export class AppModule {}
