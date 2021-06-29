# Env Vars to JSON

Simple Node.js app that reads values from environment variables and exposes them in an
Express endpoint as JSON, using the package [read-env](https://www.npmjs.com/package/read-env)

## Example

Start the app with env vars:

```bash
EXAMPLE_API__URL='http://localhost:3001' EXAMPLE_ENV_NAME='My Env' npm start
```

http://localhost:3000/config will return:

```json
{
  "api": {
    "url": "http://localhost:3001"
  },
  "envName": "My Env"
}
```
