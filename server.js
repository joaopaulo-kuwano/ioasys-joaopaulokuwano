// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
