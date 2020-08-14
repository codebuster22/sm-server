const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const query = require('./queries.js')

const app = express();

app.use(bp.json());
app.use(cors());

app.listen(3000,()=>
    console.log("Listening at Port 3000")
);