import express from "express";
import { readEnv } from "read-env";

const app = express();
const port = 3000;

const result = readEnv("EXAMPLE");

app.get("/config", (req, res) => {
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
