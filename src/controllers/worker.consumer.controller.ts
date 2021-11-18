import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('worker-queue')
export class WorkerConsumer {
  @Process('worker-job')
  workerJob(job: Job<unknown>) {
    console.log(job.data);
  }
}
