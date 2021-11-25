import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigQueueMiddleware } from './middleware/config-queue.middleware';
import { WorkerConsumer } from './processors/worker.consumer.controller';
import { WorkersProducerService } from './services/workers.producer.service';

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
    providers: [
        WorkersProducerService,
        WorkerConsumer,
        ConfigQueueMiddleware
    ]
})
export class CoreModule { }
