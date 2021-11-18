import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { WorkersProducerService } from './services/workers.producer.service';
import { WorkerProducer } from './controllers/worker.producer.controller';
import { WorkerConsumer } from './controllers/worker.consumer.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
  controllers: [AppController, WorkerProducer],
  providers: [AppService, WorkersProducerService, WorkerConsumer],
})
export class AppModule {}
