# Tasks App


## MongoDB

> https://www.mongodb.com/try/download/community

> /Users/ali/Applications/mongodb/bin/mongod --dbpath=/Users/ali/data

> https://robomongo.org/

> https://docs.mongodb.com/drivers/node/current/

```
db.version()
db.getCollection('users').find({})
```


## Mongoos

> https://mongoosejs.com/


## npm Packages

> npm i mongodb --save

> npm i mongoose --save

> npm i validator --save

> npm i nodemon --save-dev

> npm i nodemon -g  

> npm i express --save

> npm i bcryptjs --save

> npm i jsonwebtoken --save

> npm i multer --save

> npm i sharp --save

> npm i @sendgrid/mail --save

> npm i env-cmd --save

> npm i jest --save-dev

> npm i supertest --save-dev


## API Endpoints

> POST: /users

```
Body: raw: json

{
    "name": "Ali Imran",
    "email": "info@itsali.com",
    "password": "thisistest",
    "age":"30"
}
```


> GET: /users

```

```


> GET: /users/:id

```

```


> PATCH: /users/:id

```
Body: raw: json

{
    "name": "Ali Imran",
    "email": "info@itsali.com",
    "password": "thisistest",
    "age":"30"
}
```


> PATCH: /users/me

```
Auth: Bearer Token

<jwt token>

Body: raw: json

{
    "name": "Ali Imran",
    "email": "info@itsali.com",
    "password": "thisistest",
    "age":"30"
}
```


> DELETE: /users/:id

```

```


> DELETE: /users/me

```
Auth: Bearer Token

<jwt token>
```


> GET: /users/me

```
Auth: Bearer Token

<jwt token>
```


> GET: /users/logout

```
Auth: Bearer Token

<jwt token>
```


> GET: /users/logoutAll

```
Auth: Bearer Token

<jwt token>
```


> POST: /users/me/avatar

```
Auth: Bearer Token

<jwt token>

Body: form-data

key <type:file>: value
```


> DELETE: /users/me/avatar

```
Auth: Bearer Token

<jwt token>
```


> GET: /users/:id/avatar

```

```


> POST: /tasks

```
Auth: Bearer Token

<jwt token>

Body: raw: json

{
    "description": "Development Task",
    "completed": false
}
```


> GET: /tasks

```
Auth: Bearer Token

<jwt token>

Params: 

completed: <true|false>
limit: <number>
skip: <number>
sortBy: <key:desc|asc>
```


> GET: /tasks/:id

```
Auth: Bearer Token

<jwt token>
```


> PATCH: /tasks

```
Auth: Bearer Token

<jwt token>

Body: raw: json

{
    "description": "Development Task",
    "completed": true
}
```


> DELETE: /tasks/:id

```
Auth: Bearer Token

<jwt token>
```


> POST: /users/login

```
Body: raw: json

{    
    "email": "info@itsali.com",
    "password": "thisistest"
}
```


## Postman


### Test Script 

```
if(pm.response.code == 200) {
    pm.environment.set("authToken", pm.response.json().token)
}

if(pm.response.code == 201) {
    pm.environment.set("authToken", pm.response.json().token)
}
```


### Env Variables

```
{{url}}
{{authToken}}
```


## Others

```
<img src="data:image/jpg;base64,<binary>">
```


## Email

> sendgrid.com

```
Email API
Integration
Web API
```

```
npm i @sendgrid/mail --save
```


## .env Variables

> npm i env-cmd --save

> mkdir config 

> cd config 

> touch dev.env

```
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
SENDGRID_API_KEY=xxxxxx
JWT_SECRET=xxxxxx
```

> vi package.json

```
"scripts": {
    "start": "node src/index.js",
    "dev": "env-cmd -f ./config/dev.env nodemon src/index.js"
},
```


## Heroku Deployment


### Install

> brew tap heroku/brew && brew install heroku

> heroku login

> heroku create itsali-dev-nodejs


### Git setup

```
git init
git status
git add .
git commit -m "heroku deployment"
```


### Env Variables

> heroku config:set JWT_SECRET=xxxxxx

> heroku config:set SENDGRID_API_KEY=xxxxxxx

> heroku config:set MONGODB_URL="xxxxxx"

> heroku config


### Server Push

> git push heroku master

> heroku open


## Testing

> npm i jest --save-dev

> https://jestjs.io/

```
"scripts": {
    "start": "node src/index.js",
    "dev": "env-cmd -f ./config/dev.env nodemon src/index.js",
    "test": "jest --watch"
},
```

> npm test


### Test env

> npm i env-cmd --save

> mkdir config 

> cd config 

> touch test.env

```
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
SENDGRID_API_KEY=xxxxxx
JWT_SECRET=xxxxxx
```

> vi package.json

```
"scripts": {
    "start": "node src/index.js",
    "dev": "env-cmd -f ./config/dev.env nodemon src/index.js",
    "test": "env-cmd -f ./config/test.env jest --watch --runInBand"
},
"jest": {
    "testEnvironment": "node"
},
```


### Express Test Env

> npm i supertest --save-dev

> vi ./src/index.js

```
const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
```

