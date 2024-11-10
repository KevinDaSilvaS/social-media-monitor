import { Injectable } from '@nestjs/common';
import HashtagQueue from './queues/hashtag-queue';
import { Source } from './clients/client-enum';
import { Filter } from './filters/filter-enum';

@Injectable()
export class AppService {
  async createJobForHashtag(hashtag: string, filter: Filter) {
    await (await new HashtagQueue().startQueue()).addJob({ 
      hashtag, 
      source: Source.Twitter,
      filter })

  }
}
