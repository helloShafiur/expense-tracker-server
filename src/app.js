const express = require("express");
const dotenv = require("dotenv");
const { errorHandler, notFound } = require("../middlewares/errorMiddleware");
const dbConnect = require("./config/dbCOnnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRoute");
const app = express();

//ENV
dotenv.config();
// const logger = (req, res, next) => {
//   console.log(`I am Logger`);
//   next();
// };
// app.use(logger);
//dbConnect
dbConnect();

//Middleware
app.use(express.json());

//Route
app.use("/api/users", userRoute);

//Error
app.use(notFound);
app.use(errorHandler);

module.exports = app;
