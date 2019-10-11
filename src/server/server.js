const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// set up static middleware to serve the bundle file required from index.html
app.use('/dist', express.static('dist'));

// serve the html file at the root domain
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

app.listen(port, () => console.log(`listening on port ${port}...`));
