# How to run (step by step):

Install dependencies: 

```bash
npm install
```

Create the .env file:

```bash
copy .env.example .env
```

# Two ways to set up the database:

Using MySQL (Docker):
In .env, set DB_TYPE=mysql

```bash
docker compose up -d
```

Without MySQL:
In .env, set DB_TYPE=fake to use the in-memory database.

Start the application:

```bash
npm run dev
```

# Using the already set up http requests inside vscode directly

There are pre made CRUD requests inside "requests.http".
You can use them by downloading the extension Rest Client (by Huachao Mao)
And use them by going inside the file "requests.http", and clicking on the "Send Request" that appears above each url.