import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";

import middlewares from "./middleware/index.js";
import routes from "./routes/index.js";

dotenv.config();

const PORT = 3002;

const app = express();

app.use(bodyParser.json());

app.use("/user", routes.userRouter);
app.use("/product", routes.productRouter);
app.use("/login", routes.loginRouter);

app.use(middlewares.errorHandle);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
