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


> DELETE: /users/:id

```

```


> GET: /users/me

```
Auth: Bearer Token

<jwt token>
```


> POST: /tasks

```
Body: raw: json

{
    "description": "Development Task",
    "completed": false
}
```


> GET: /tasks

```

```


> GET: /tasks/:id

```

```


> PATCH: /tasks

```
Body: raw: json

{
    "description": "Development Task",
    "completed": true
}
```


> DELETE: /tasks/:id

```

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


## Heroku Deployment
