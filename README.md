# Ghost Starter: Developer edition (WIP)

A sensible structures for developing on top of the Ghost blogging platform.

- Your own Express instance and routes
- All of the ghost features (stable-branch, currently 0.11.7)
- Simple ghost upgrades using package manager
- Scalability through database externalization (PostgreSQL)
- More coming soon...

### Getting Started
````
$ npm install
$ npm run dev
````
Runs the express server with watch tasks.

`npm start` Runs without a task runner.

---

### Configuration
#### Content
The content directory has been changed to `ghost-content` for clarity. The `config.paths.contentPath` value has been updated to reflect this move.

_COMING SOON: S3 bucket configuration for all media files_

#### Database
The configuration uses PostgreSQL by default.

**For Development**  
You can run the following to create the appropriate user and database from the `psql` CLI:

````
CREATE USER "dev" WITH CREATEDB;
CREATE DATABASE "ghost-dev" WITH OWNER = "dev";
````
_COMING SOON: a local .env file to hold all of these configurations_

**For Production**  
Use environment variables:

- **host:** `process.env.POSTGRES_HOST`
- **user:** `process.env.POSTGRES_USER`
- **password:** `process.env.POSTGRES_PASSWORD`
- **database:** `process.env.POSTGRES_DATABASE`
- **port:** `process.env.POSTGRES_PORT`


Additional questions? [@JoelSocialized](https://twitter.com/joelsocialized) on twitter
