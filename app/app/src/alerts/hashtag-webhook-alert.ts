import axios from "axios";
import { Batch } from "src/mappers/types";

export async function alert(batch: Batch) {
    await axios.post(
        'https://webhook.site/853fe4e0-d545-46ad-8318-91e465c92d5d',
        batch
    )
}