## Description

This is a test project built with NestJS, designed to demonstrate basic CRUD operations and authentication.

## Build and run the app

```bash
$ docker compose up --build
```

## Retrive auth token

**POST** /auth/login

## API endpoints

### Create user
**POST** /api/v1/add-user

**BODY:** { name, email, phone }

### Get user
**GET** /api/v1/get-user/:id