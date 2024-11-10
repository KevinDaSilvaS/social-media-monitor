import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HashtagQueue from './queues/hashtag-queue';
import worker from './workers/hashtag-worker'
import { Source } from './clients/client-enum';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  (await new HashtagQueue().startQueue()).addJob({ 
    hashtag: '#tbt', 
    source: Source.Twitter })

  console.log(worker)
}
bootstrap();
