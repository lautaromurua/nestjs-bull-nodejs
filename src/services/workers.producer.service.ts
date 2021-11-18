import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class WorkersProducerService {
  constructor(@InjectQueue('worker-queue') private queue: Queue) {}

  async sendJob(job: any) {
    await this.queue.add(
      'worker-job',
      {
        work: job,
      },
      {
        repeat: {
          every: 10000,
          limit: 8,
        },
      },
    );
  }
}
