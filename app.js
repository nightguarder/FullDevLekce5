// app.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const { router } = require('./src/auth/router');

//Local Variables
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(("/api/v1/auth"),router)
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
