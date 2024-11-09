import { Source } from "./client-enum"
import { TwitterMapper } from "src/mappers/source-mappers/twitter"

const clients = {
    [Source.Twitter]: new TwitterMapper()
}

export = clients
