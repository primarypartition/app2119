// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id)
console.log(id.getTimestamp())

console.log(id.id)
console.log(id.id.length)

console.log(id.toHexString())
console.log(id.toHexString().length)