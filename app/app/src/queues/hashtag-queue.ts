import { Queue } from 'bullmq';
import { HashtagJob } from './types';

class HashtagQueue {
    private queue: Queue
    private queueName = 'hashtag'
    public async startQueue () {
        this.queue = new Queue(this.queueName, { connection: {
            host: process.env.REDIS_HOST ?? "localhost",
            port: parseInt(process.env.REDIS_PORT) ?? 6379
        }})

        return this
    }

    public async addJob(job: HashtagJob) {
        await this.queue.add(
            this.queueName, 
            job,
            {
                repeat: {
                  every: parseInt(process.env.REPEAT_INTERVAL) ?? 5000
                },
            })
    }
}

export = HashtagQueue