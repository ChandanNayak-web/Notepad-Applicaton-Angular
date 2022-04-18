const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://chandan:Trident248@chandannayak.f1bzz.mongodb.net/inotebook?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connect to mango sucess fully');
        
    })
}


module.exports = connectToMongo;
