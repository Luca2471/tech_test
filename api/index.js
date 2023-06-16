const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const _ = require('lodash');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get('/vulnerabilities', async (req, res) => {
  let content;

  try {
    content = await fs.readFile('data/vulnerabilities.json', 'utf-8');
  } catch (error) {
    return res.sendStatus(404);
  }
  res.send(content);
});

app.listen(port, () => console.log(`API is running on port ${port}`));
