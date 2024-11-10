import { Injectable } from '@nestjs/common';
import HashtagQueue from './queues/hashtag-queue';
import { Source } from './clients/client-enum';

@Injectable()
export class AppService {
  async createJobForHashtag(hashtag: string) {
    await (await new HashtagQueue().startQueue()).addJob({ 
      hashtag: hashtag, 
      source: Source.Twitter })

  }
}
