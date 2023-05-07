const mongoose = require('mongoose');


const dbConnect = async() => {
    try{
        await mongoose.connect('mongodb+srv://markme:markme@nodeexpress.adv6csz.mongodb.net/expenses-tracker-db?retryWrites=true&w=majority')
        console.log(`DB Connected Successfully`)
    }catch(err){
        console.log(`Error ${err.message}`);
    }
}

module.exports = dbConnect;