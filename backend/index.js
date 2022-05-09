require ('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');

const middlewares = require('./middlewares');
const routes = require('./routes');

const PORT = 3002;

const app = express();

app.use(bodyParser.json());

app.use("/user", routes.userRouter);
app.use("/product", routes.productRouter);
app.use("/login", routes.loginRouter);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));