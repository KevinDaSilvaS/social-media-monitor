const { faker } = require('@faker-js/faker')

const generator = {
    last_id: undefined,
    generatePayload: function() {
        const total = faker.number.int({ min: 0, max: 30 })
        const id = faker.finance.accountNumber()
        const payload = {
            "data": [],
            "includes": {
                "users": []
            },
            "meta": {
                "newest_id": id,
                "oldest_id": this.last_id,
                "result_count": total
            }
         }
        
        this.last_id = id
        for (let index = 0; index < total; index++) {
            const user = {
                "description": `${faker.lorem.sentences()}`,
                "id": faker.finance.accountNumber(),
                "name": faker.person.firstName(),
                "username": faker.person.firstName()
            };
            payload.includes.users.push(user)

            const tweet = {
                "author_id": user.id,
                "created_at": new Date(),
                "id": faker.finance.accountNumber(),
                "text": faker.lorem.sentences()
            }

            payload.data.push(tweet)
        }

        return payload
    }
}

module.exports = generator