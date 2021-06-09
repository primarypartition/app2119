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


## API Endpoints

> POST: /users

```
{
    "name": "Ali Imran",
    "email": "info@itsali.com",
    "password": "thisistest",
    "age":"30"
}
```

> GET: /users

```
{
    
}
```

> GET: /users/:id

```
id=""
```

> PATCH: /users/:id

```
{
    "name": "Ali Imran",
    "email": "info@itsali.com",
    "password": "thisistest",
    "age":"30"
}
```

> POST: /tasks

```
{
    "description": "Development Task",
    "completed": false
}
```

> GET: /tasks

```
{
    
}
```

> GET: /tasks/:id

```
id=""
```

> PATCH: /tasks

```
{
    "description": "Development Task",
    "completed": true
}
```


## Heroku Deployment

