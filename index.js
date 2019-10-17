#!/usr/bin/env node
const terminalImage = require("terminal-image");
const got = require("got");

(async () => {
  const { body } = await got(`tejaskumar.com/static/tejass/${Math.floor(Math.random() * 14 + 1)}.png`, {
    encoding: null,
  });
  console.log(await terminalImage.buffer(body));
})();
