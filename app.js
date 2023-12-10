// requirements
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const AuthRoute = require('./src/auth/auth');

//Local Variables
dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

