const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./db');
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route
const todoRoute = require('./routes/todos');
app.use('/todos', todoRoute);

app.get('/', (req, res) => {
  res.send("HELLO");
});

// connect db
db();

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT ${PORT}`);
});
