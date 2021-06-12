# NodeJS

## Install nodejs

> https://nodejs.org/en/

> https://www.npmjs.com/


## GitHub Repo

```
echo "# app2119" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/primarypartition/app2119.git
git push -u origin main
```


## nodemon Windows Fix

```
1. Powershell
2. Run as Administrator
3. Run Set-ExecutionPolicy Unrestricted
4. nodemon -v
```


## Commands

> node -v

> node

> node index.js

> npm -v

> npm init

> npm install

> npm update

> nodemon -v

> npm nodemon -v

> nodemon app.js

> node inspect app.js

> node --inspect-brk app.js (Windows)

> num run dev

> npm run start


## debugger

> node inspect app.js

> node --inspect-brk app.js (Windows)

```
Goto: 

chrome://inspect

Remote Target: 

Click: inspect

debugger> restart
```


## gitignore

```
node_modules
config
.DS_Store
.git
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


## Others


### MongoDB 

```
> /Users/ali/Applications/mongodb/bin/mongod --dbpath=/Users/ali/data
```


## Errors

```
npm i nodemon -g  

checkPermissions Missing write access to /usr/local/lib/node_modules

sudo chown -R $USER /usr/local/lib/node_modules
```
