import { Queue } from 'bullmq';
import { HashtagJob } from './types';
import { envs } from 'src/env';

class HashtagQueue {
    private queue: Queue
    private queueName = 'hashtag'
    public async startQueue () {
        this.queue = new Queue(this.queueName, { connection: {
            host: envs.redisHost,
            port: envs.redisPort
        }})

        return this
    }

    public async addJob(job: HashtagJob) {
        await this.queue.add(
            this.queueName, 
            job,
            {
                repeat: {
                  every: envs.repeatInterval
                },
            })
    }
}

export = HashtagQueue