import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HashtagQueue from './queues/hashtag-queue';
import worker from './workers/hashtag-worker'


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  (await new HashtagQueue().startQueue()).addJob({ 
    hashtag: '#tbt', 
    source: 'Twitter' })

  console.log(worker)
}
bootstrap();
