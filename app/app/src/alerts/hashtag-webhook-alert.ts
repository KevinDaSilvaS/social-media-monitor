import axios from "axios";
import { envs } from "src/env";
import { Batch } from "src/mappers/types";

export async function alert(batch: Batch) {
    await axios.post(envs.webhookAlertUrl, batch)
}