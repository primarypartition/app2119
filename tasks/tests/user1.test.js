const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

test('Hello world!', () => {

})

// const userOne = {
//     name: 'Ali Imran',
//     email: 'ali@example.com',
//     password: '56what!!'
// }

// beforeEach(async () => {
//     await User.deleteMany()
//     await new User(userOne).save()
// })

// test('Should signup a new user', async () => {
//     await request(app).post('/users').send({
//         name: 'Ali Rana',
//         email: 'rana@example.com',
//         password: 'MyPass777!'
//     }).expect(201)
// })

// test('Should login existing user', async () => {
//     await request(app).post('/users/login').send({
//         email: userOne.email,
//         password: userOne.password
//     }).expect(200)
// })

// test('Should not login nonexistent user', async () => {
//     await request(app).post('/users/login').send({
//         email: userOne.email,
//         password: 'thisisnotmypass'
//     }).expect(400)
// })