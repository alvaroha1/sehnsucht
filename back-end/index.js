
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.listen(port, () => {console.log(`server running on port ${port}`)});