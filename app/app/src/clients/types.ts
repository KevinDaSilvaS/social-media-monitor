export type Tweet = {
    author_id: number,
    created_at: Date,
    id: number,
    text: string
}

export type TwitterUserData = {
    description: string,
    id: number,
    name: string,
    username: string
}

export type TwitterApiResponse = {
    data: Tweet[],
    includes: {
        users: TwitterUserData[]
    },
    meta: {
        newest_id: number,
        oldest_id: number,
        result_count: number
    }
}