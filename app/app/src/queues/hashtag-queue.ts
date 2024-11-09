import { Queue } from 'bullmq';

class HashtagQueue {
    private queue: Queue
    private queueName = 'hashtag'
    public async startQueue () {
        this.queue = new Queue(this.queueName, { connection: {
            host: "localhost",
            port: 6379
        }})

        return this
    }

    public async addJob(job?: any) {
        await this.queue.add(
            this.queueName, 
            job,
            {
                repeat: {
                  every: 5000
                },
            })
    }
}

export = HashtagQueue