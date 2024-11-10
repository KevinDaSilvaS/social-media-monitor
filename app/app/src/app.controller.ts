import { Controller, HttpCode, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('monitor')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(204)
  async createJobForHashtag(@Query() query) {
    console.log(query)
    return await this.appService.createJobForHashtag(`%23${query.hashtag}`);
  }
}
