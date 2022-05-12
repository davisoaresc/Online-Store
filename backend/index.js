require ('dotenv').config();

const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express');

const middlewares = require('./middlewares');
const routes = require('./routes');


const PORT = 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use("/user", routes.userRouter);
app.use("/product", routes.productRouter);
app.use("/login", routes.loginRouter);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));