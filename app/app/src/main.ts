import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HashtagQueue from './queues/hashtag-queue';
import worker from './workers/hashtag-worker';
import mongoose from 'mongoose';

async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/monitor');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  await new HashtagQueue().startQueue()
  await worker
}
bootstrap();
