# Monsoon-Rain

We completed the Legislative Tracking System challenge.

## Requirements

- Node 16+
- PostgreSQL (for server code)

## Tools Used

- Angular 14
- AdonisJS

## Directory structure

- `/scripts` contains code to scrape the Hawaii State Capitol website.
- `/ui` contains the user interface code
- `/server` contains the backend code

## Setting up development environment

Directories are with respect to root directory.

### Server

```
cd server
npm i
npm start
```

In the `.env` file, enter in your PostgreSQL credentials in the `PG_USER` and `PG_PASSWORD` entries.

Migrate the database using

```node ace node ace migration:run```

### UI

```
cd ui
npm i
npm start
```

Connect to http://localhost:4200 to access website.
