import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigQueueMiddleware } from './middleware/config-queue.middleware';
import { WorkerConsumer } from './processors/worker.consumer.controller';
import { WorkersProducerService } from './services/workers.producer.service';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'd73an2voebo3oc',
  'lltfzwlusrdsku',
  'dd88637e7689ac3c863874c00d5cebccf8f2ee9473a393766653dcaa73a30e2f',
  {
    host: 'ec2-3-230-219-251.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

try {
  console.log('Connecting to database...');
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'worker-queue',
    }),
  ],
  providers: [WorkersProducerService, WorkerConsumer, ConfigQueueMiddleware],
})
export class CoreModule {}
