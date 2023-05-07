const express = require('express');
const dbConnect = require('./config/dbConnect');
const {regitserUser} = require('./controllers/users/usersCtrl')
const app = express();
const userRoute = require("./routes/users/userRoute")
const {errorHandler} = require('./middlewares/errorMiddleware');
//middlewares
app.use(express.json());

const logger = (req,res,next)=>{
    console.log('AM A LOGGER');
    next();
};
app.use(errorHandler);

app.use(logger);
//db Connect
dbConnect();
//routes
app.use("/",userRoute);

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000');
})