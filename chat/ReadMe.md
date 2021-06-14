# Chat App


## npm Packages

> npm i express --save

> npm i nodemon --save-dev

> npm i socket.io --save

> npm i bad-words --save


## Scripts

```
"start": "node src/index.js",
"dev": "nodemon src/index.js"
```


## Socket.io

> https://socket.io/


## Heroku Deployment


### Install

> brew tap heroku/brew && brew install heroku

> heroku login

> heroku create itsali-nodejs


### Git setup

```
git init
git status
git add .
git commit -m "heroku deployment"
```


### Server Push

> git push heroku master

> heroku open
