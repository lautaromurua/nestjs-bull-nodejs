import { Controller, Get, Query } from '@nestjs/common';
import { WorkersProducerService } from './services/workers.producer.service';

@Controller()
export class AppController {
  constructor(private workersProducerService: WorkersProducerService) {}

  @Get('send-job')
  async sendJob(@Query('job') job: any) {
    this.workersProducerService.sendJob(job);
    return job;
  }
}
