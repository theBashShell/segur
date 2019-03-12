const init = require("../init");
const express = require("express");
const next = require("next");
const randomWords = require('random-words');

const port = process.env.SEGUR_PORT || 3000;
const dev = process.env.SEGUR_STATE !== "production";
const app = next({
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.post('/api', (req, res) => {
      res.json({
        you: `${randomWords()}`
      });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) console.log(err);
      console.log(`Segur's ON: \t http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });