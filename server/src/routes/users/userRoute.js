const express = require('express');
const userRoute = express.Router();

const {registerUser, fetchUsersCtrl} = require('../../controllers/users/usersCtrl');

userRoute.post("/register", registerUser);
userRoute.get('/', fetchUsersCtrl);

module.exports = userRoute;