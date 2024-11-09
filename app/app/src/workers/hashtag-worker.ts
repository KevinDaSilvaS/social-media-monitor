import { Worker, Job } from 'bullmq'
import picker from '../clients/client-picker'

const worker = new Worker('hashtag', async (job: Job) => {
  console.log('JOB:: ', job.data)
  try {
    const mapper = picker[job.data.source]
    await mapper.getData(job.data)
    /* const { batch, registers } =  */mapper.mapData()
    //console.log(batch, registers)
  } catch (error) {
    console.log('error::  ', error)
  }
}, { connection: {
    host: "localhost",
    port: 6379
  }})

export = worker