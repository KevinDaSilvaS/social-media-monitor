import { Logger } from '@nestjs/common';
import { Worker, Job } from 'bullmq'
import picker from '../clients/client-picker'
import filters from '../filters/filter-picker'
import { isAnomally } from 'src/filters/filters'
import { BatchModel } from 'src/schema/batch';
import { RegisterModel } from 'src/schema/register';
import { alert } from '../alerts/hashtag-webhook-alert'

const logger = new Logger('Hashtag Worker')

const worker = new Worker('hashtag', async (job: Job) => {
  logger.debug(job.data)
  try {
    const mapper = picker[job.data.source]
    logger.log(`Getting data from ${job.data.source} client`)
    await mapper.getAndSetData(job.data)

    const { batch, registers } = mapper.mapData()

    const filter = filters[job.data.filter]
    logger.log('Detecting anomaly')

    const batches = await BatchModel.find({ 
      hashtag: job.data.hashtag, 
      source: job.data.source  
    }).limit(1000).exec()

    const expected = filter(batches)
    if (expected > 0 && isAnomally(expected, batch.total)) {
      logger.warn(`Anomaly detected for batch id: ${batch.batchId}`)
      await alert(batch)
    }

    logger.log('Saving batch')
    await new BatchModel(batch).save()

    logger.log('Saving registers')
    await RegisterModel.collection.insertMany(registers)
  } catch (error) {
    logger.error(error.message)
  }
}, { connection: {
    host: "localhost",
    port: parseInt(process.env.REDIS_PORT) || 6379
  }})

export = worker