const express = require('express');
const port = process.env.PORT || 8081;
const app = express();

app.use(express.static(__dirname + '/build/'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port);

// eslint-disable-next-line
console.log('server listening');
