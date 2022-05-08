require('dotenv').config();

const bodyParser = require('body-parser');

const express = require('express');

const middlewares = require('./middleware');
const routes = require('./routes');

const PORT = 3002;

const app = express();

app.use(bodyParser.json());

app.use('/user', routes.userRouter);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));