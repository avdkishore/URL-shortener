# [URL Shortener](https://github.com/avdkishore/URL-shortener)

## Overview
- An express server which returns a shortend url for a given url
- [Project Dependencies](https://github.com/avdkishore/URL-shortener/blob/main/package.json)


## Controllers

**Health**
Purpose of this controller is to manage collections of users and groups in shelf service
```
action:- find
api:- /v1/healthz
method:- GET
description:- Health check for the application.

```

**Shorten**
```
action:- find
api:- /v1/shorten
method:- GET
description:- Shortens the provided url. It is idempotent.
```


## Requirements

NODE: `>=12`

YARN: `1.22.x`

## Commands

#### for local development with nodemon
dev: `yarn dev`

#### run test
test: `yarn test`

#### build dist for deployment
build: `yarn build`

#### start server from dist
start: `yarn start`
