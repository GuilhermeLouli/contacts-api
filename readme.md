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

## Without MySQL:
In .env, set DB_TYPE=fake to use the in-memory database.
<br><br>
There is no need to set Docker if you are using in-memory database.

## Using MySQL (Docker):
In .env, set DB_TYPE=mysql
<br><br>
Start docker:
```bash
docker compose up -d
```

# Start the application:

```bash
npm run dev
```

# Using the already set up http requests inside vscode directly

There are pre made CRUD requests inside "requests.http".
<br><br>
You can use them by downloading the extension Rest Client (by Huachao Mao)
<br><br>
And use them by going inside the file "requests.http", and clicking on the "Send Request" that appears above each url.
