const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();
const {regitserUser} = require('./controllers/users/usersCtrl')
const app = express();
const userRoute = require("./routes/users/userRoute")
const {errorHandler, notFound} = require('./middlewares/errorMiddleware');
//middlewares
app.use(express.json());

const logger = (req,res,next)=>{
    console.log('AM A LOGGER');
    next();
};
//Error Handler

app.use("/api/users",userRoute);
app.use(errorHandler);

app.use(notFound);
app.use(logger);
//db Connect
dbConnect();
//routes

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})