const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/ethena", async (req, res) => {
  const result = await fetch('https://app.ethena.fi/api/yields/protocol-and-staking-yield');
  const data = await result.json();
  res.json(data);
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
`
