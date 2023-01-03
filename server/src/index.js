const express = require('express');
const cors = require('cors');
const routes = require('./Router/routes');
const app = express();
app.use(express.json());
app.use('/files', express.static("Public/Upload"))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
  app.use(cors());
  next();
});

app.use(routes);

app.listen(8080, () => console.log('Servidor rodando http://localhost:8080'));
// const options = {
//   origin: 'http://localhost:3000',
// };
// app.use(cors(options));
