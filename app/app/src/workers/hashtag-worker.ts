import { Worker, Job } from 'bullmq'
import picker from '../clients/client-picker'

const worker = new Worker('hashtag', async (job: Job) => {
  console.log('JOB:: ', job.data)
  try {
    const mapper = picker[job.data.source]
    await mapper.getAndSetData(job.data)
    /* const { batch, registers } =  */mapper.mapData()
    //console.log(batch, registers)
  } catch (error) {
    console.log('error::  ', error)
  }
}, { connection: {
    host: process.env.REDIS_HOST ?? "localhost",
    port: parseInt(process.env.REDIS_PORT) ?? 6379
  }})

export = worker