import { Logger } from '@nestjs/common';
import { Worker, Job } from 'bullmq'
import picker from '../clients/client-picker'
import filters from '../filters/filter-picker'
import { isAnomally } from 'src/filters/filters'

const logger = new Logger('Hashtag Worker')

const worker = new Worker('hashtag', async (job: Job) => {
  console.log('JOB:: ', job.data)
  try {
    const mapper = picker[job.data.source]
    logger.log(`Getting data from ${job.data.source} client`)
    await mapper.getAndSetData(job.data)
    /* const { batch, registers } =  */mapper.mapData()
    //const filter = filters[job.data.filter]
    logger.log('Detecting anomaly')

    logger.log('Saving batch')

    logger.log('Saving registers')
    
    //console.log(batch, registers)
  } catch (error) {
    logger.error(error.message)
  }
}, { connection: {
    host: "localhost",
    port: parseInt(process.env.REDIS_PORT) || 6379
  }})

export = worker