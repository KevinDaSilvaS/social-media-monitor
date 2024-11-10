require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HashtagQueue from './queues/hashtag-queue';
import worker from './workers/hashtag-worker';
import mongoose from 'mongoose';
import { envs } from './env'

async function bootstrap() {
  await mongoose.connect(envs.mongoConnectionUrl);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  await new HashtagQueue().startQueue()
  await worker
}
bootstrap();
