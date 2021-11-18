import { Controller, Get, Query } from '@nestjs/common';
import { WorkersProducerService } from 'src/services/workers.producer.service';

@Controller('producer')
export class WorkerProducer {
  constructor(private readonly workerProducerService: WorkersProducerService) {}

  @Get('send-job')
  async sendJob(@Query('job') job: any) {
    this.workerProducerService.sendJob(job);
    return job;
  }
}
