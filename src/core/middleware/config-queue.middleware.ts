import { Injectable, NestMiddleware, OnModuleInit } from '@nestjs/common';
import { WorkersProducerService } from '../services/workers.producer.service';

@Injectable()
export class ConfigQueueMiddleware implements NestMiddleware, OnModuleInit {
  constructor(private workersProducerService: WorkersProducerService) {}

  onModuleInit() {
    this.workersProducerService.sendJob();
  }

  use(req: any, res: any, next: () => void) {
    next();
  }
}
