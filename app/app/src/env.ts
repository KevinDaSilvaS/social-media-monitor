export const envs = {
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: parseInt(process.env.REDIS_PORT) || 6379,
    mongoConnectionUrl: `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_DATABASE_NAME}`,
    repeatInterval: parseInt(process.env.REPEAT_INTERVAL) || 10000,
    percentageWanted: parseInt(process.env.PERCENTAGE_WANTED) || 50,
    twitterApiUrl: process.env.TWITTER_API_URL,
    webhookAlertUrl: process.env.WEBHOOK_ALERT_URL
}